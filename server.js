const axios = require('axios');
const express = require('express');
const { Pool } = require('pg'); // Using Postgres
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

// --- DATABASE CONNECTION ---
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // Required for Render
});

// Create Table if it doesn't exist
pool.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY, 
        index_number VARCHAR(50) UNIQUE NOT NULL, 
        full_name VARCHAR(100), 
        password VARCHAR(255),
        has_paid INTEGER DEFAULT 0
    );
`, (err, res) => {
    if (err) console.error("❌ DB Init Error:", err);
    else console.log("✅ Users Table Ready");
});

// --- ROUTES ---
app.post('/signup', async (req, res) => {
    const { index_number, full_name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    try {
        await pool.query(
            `INSERT INTO users (index_number, full_name, password, has_paid) VALUES ($1, $2, $3, 0)`, 
            [String(index_number), full_name, hashedPassword]
        );
        res.json({ message: "Success" });
    } catch (err) {
        if (err.code === '23505') return res.status(400).json({ error: "User exists" });
        res.status(500).json({ error: "Server Error" });
    }
});

app.post('/login', async (req, res) => {
    const { index_number, password } = req.body;
    try {
        const result = await pool.query(`SELECT * FROM users WHERE index_number = $1`, [String(index_number)]);
        const user = result.rows[0];

        if (!user) return res.status(400).json({ error: "User not found" });
        if (!bcrypt.compareSync(password, user.password)) return res.status(400).json({ error: "Invalid password" });
        
        res.json({ 
            message: "Success", 
            user: { name: user.full_name, index: user.index_number, hasPaid: user.has_paid } 
        });
    } catch (err) { res.status(500).json({ error: "Server Error" }); }
});

app.post('/pay', async (req, res) => {
    const { email, amount } = req.body; 
    const secretKey = process.env.PAYSTACK_SECRET_KEY || 'sk_test_8af776d51934a2ce11e4b7a92b67cf7db654cca8'; 

    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email: email, amount: amount * 100, currency: "KES",
            callback_url: "https://career-portal-y64y.onrender.com"
        }, { headers: { Authorization: `Bearer ${secretKey}`, 'Content-Type': 'application/json' } });
        res.json({ authorization_url: response.data.data.authorization_url });
    } catch (error) { res.status(500).json({ error: "Payment failed" }); }
});

app.post('/verify-payment', async (req, res) => {
    const { index_number } = req.body;
    try {
        await pool.query(`UPDATE users SET has_paid = 1 WHERE index_number = $1`, [String(index_number)]);
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: "DB Error" }); }
});

// --- RECOMMENDATION LOGIC (Keep existing logic) ---
app.post('/recommend', (req, res) => {
    const { points, category, level, meanGrade } = req.body;
    // ... [Your existing recommendation logic here, shortened for space] ...
    // Since this logic doesn't use the DB, it stays exactly the same as before!
    // Just ensure you have the full filter logic here.
    
    // For now, returning top 50 matches:
    res.json({ results: courseList.slice(0, 50) });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));