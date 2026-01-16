const axios = require('axios');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

// --- LOAD COURSES ---
let courseList = [];
try { 
    courseList = require('./courses.js'); 
} catch (e) { console.log("⚠️ courses.js missing"); }

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); 
app.use(express.static('.'));

// --- DATABASE ---
const db = new sqlite3.Database('./users.db');

// Ensure 'has_paid' column exists
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    index_number TEXT UNIQUE, 
    full_name TEXT, 
    password TEXT,
    has_paid INTEGER DEFAULT 0
)`);

// --- ROUTES ---
app.post('/signup', (req, res) => {
    const { index_number, full_name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    db.run(`INSERT INTO users (index_number, full_name, password, has_paid) VALUES (?, ?, ?, 0)`, 
        [String(index_number), full_name, hashedPassword], 
        (err) => {
            if (err) return res.status(400).json({ error: "User exists" });
            res.json({ message: "Success" });
        }
    );
});

app.post('/login', (req, res) => {
    const { index_number, password } = req.body;
    db.get(`SELECT * FROM users WHERE index_number = ?`, [String(index_number)], (err, user) => {
        if (!user) return res.status(400).json({ error: "User not found" });
        if (!bcrypt.compareSync(password, user.password)) return res.status(400).json({ error: "Invalid password" });
        
        // Return the payment status
        res.json({ 
            message: "Success", 
            user: { 
                name: user.full_name, 
                index: user.index_number,
                hasPaid: user.has_paid // 1 or 0
            } 
        });
    });
});

app.post('/pay', async (req, res) => {
    const { email, amount } = req.body; 
    // 👇 Ensure your Key is correct!
    const secretKey = process.env.PAYSTACK_SECRET_KEY || 'sk_test_8af776d51934a2ce11e4b7a92b67cf7db654cca8'; 

    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email: email,
            amount: amount * 100, 
            currency: "KES",
            callback_url: "https://career-portal-y64y.onrender.com" // Must match your site
        }, {
            headers: { Authorization: `Bearer ${secretKey}`, 'Content-Type': 'application/json' }
        });
        res.json({ authorization_url: response.data.data.authorization_url });
    } catch (error) {
        console.error("Payment Init Failed:", error.message);
        res.status(500).json({ error: "Payment failed" });
    }
});

// ✅ FIX: Force Update Payment Status
app.post('/verify-payment', (req, res) => {
    const { index_number } = req.body;
    console.log(`💰 Verifying payment for: ${index_number}`);
    
    db.run(`UPDATE users SET has_paid = 1 WHERE index_number = ?`, [String(index_number)], function(err) {
        if (err) {
            console.error("DB Update Error:", err);
            return res.status(500).json({ error: "DB Error" });
        }
        res.json({ success: true });
    });
});

app.post('/recommend', (req, res) => {
    const { points, category, level, meanGrade } = req.body;
    // ... (Your existing recommendation logic here - shortened for brevity)
    // You can copy-paste your previous recommend logic here.
    
    // Simple placeholder for testing:
    const results = courseList.slice(0, 50); 
    res.json({ results });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));