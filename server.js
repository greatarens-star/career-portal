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
    console.log(`✅ Loaded ${courseList.length} courses.`);
} catch (e) { console.log("⚠️ courses.js missing"); }

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); 
app.use(express.static('.'));

// --- DATABASE SETUP (With Payment Tracking) ---
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) console.error("❌ DB Error:", err.message);
    else console.log("✅ Database Connected");
});

// Create table with 'has_paid' column
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    index_number TEXT UNIQUE, 
    full_name TEXT, 
    password TEXT,
    has_paid INTEGER DEFAULT 0
)`);

// --- AUTH ROUTES ---
app.post('/signup', (req, res) => {
    const { index_number, full_name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    // New users start with has_paid = 0
    db.run(`INSERT INTO users (index_number, full_name, password, has_paid) VALUES (?, ?, ?, 0)`, 
        [index_number, full_name, hashedPassword], 
        (err) => {
            if (err) return res.status(400).json({ error: "User exists" });
            res.json({ message: "Success" });
        }
    );
});

app.post('/login', (req, res) => {
    const { index_number, password } = req.body;
    db.get(`SELECT * FROM users WHERE index_number = ?`, [index_number], (err, user) => {
        if (!user) return res.status(400).json({ error: "User not found" });
        if (!bcrypt.compareSync(password, user.password)) return res.status(400).json({ error: "Invalid password" });
        
        // Send back the payment status (0 or 1)
        res.json({ 
            message: "Success", 
            user: { 
                name: user.full_name, 
                index: user.index_number,
                hasPaid: user.has_paid === 1 
            } 
        });
    });
});

// --- PAYMENT ROUTES ---
app.post('/pay', async (req, res) => {
    const { email, amount } = req.body; 
    // 👇 Ensure you have your key here or in Environment Variables
    const secretKey = process.env.PAYSTACK_SECRET_KEY || 'sk_test_8af776d51934a2ce11e4b7a92b67cf7db654cca8'; 

    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email: email,
            amount: amount * 100, 
            currency: "KES",
            callback_url: "https://career-portal-y64y.onrender.com" // Ensure this matches your URL
        }, {
            headers: { Authorization: `Bearer ${secretKey}`, 'Content-Type': 'application/json' }
        });
        res.json({ authorization_url: response.data.data.authorization_url, reference: response.data.data.reference });
    } catch (error) {
        console.error("Paystack Init Error:", error.message);
        res.status(500).json({ error: "Payment failed" });
    }
});

app.post('/verify-payment', (req, res) => {
    const { index_number } = req.body;
    // In a real app, we would verify the reference with Paystack first.
    // For this project, we trust the frontend call after success.
    
    db.run(`UPDATE users SET has_paid = 1 WHERE index_number = ?`, [index_number], function(err) {
        if (err) return res.status(500).json({ error: "DB Error" });
        res.json({ success: true });
    });
});

// --- RECOMMENDATION ENGINE ---
app.post('/recommend', (req, res) => {
    const { points, category, level, meanGrade } = req.body;
    
    // KEYWORDS MAPPING
    const keywords = {
        'edu': ['Education', 'Teaching', 'Early Childhood', 'Arts'],
        'eng': ['Engineering', 'Technology', 'Civil', 'Electrical', 'Mechanical', 'Automotive', 'Geospatial'],
        'med': ['Medicine', 'Health', 'Nursing', 'Surgery', 'Clinical', 'Pharmacy', 'Community', 'Nutrition'],
        'agri': ['Agriculture', 'Agribusiness', 'Food', 'Horticulture'],
        'biz': ['Business', 'Commerce', 'Economics', 'Management', 'Finance', 'Accounting', 'Procurement'],
        'law': ['Law', 'Legal', 'Justice', 'Judicial'],
        'arts': ['Arts', 'Social', 'Sociology', 'Development', 'Psychology', 'Criminology', 'Gender'],
        'pure': ['Science', 'Biology', 'Chemistry', 'Physics', 'Mathematics', 'Statistics', 'Laboratory', 'Biochemistry'],
        'arch': ['Architecture', 'Building', 'Construction', 'Land', 'Real Estate', 'Surveying', 'Quantity'],
        'hosp': ['Hospitality', 'Tourism', 'Travel', 'Hotel', 'Catering'],
        'media': ['Media', 'Communication', 'Journalism', 'Film', 'Public Relations'],
        'it': ['Computer', 'Information', 'Software', 'Data', 'Cyber', 'ICT', 'Systems']
    };

    const searchTerms = keywords[category] || [];

    const qualified = courseList.filter(c => {
        const nameLower = c.name.toLowerCase();
        if (level === 'diploma') {
            if (!nameLower.includes('diploma')) return false;
            if (nameLower.includes('degree') || nameLower.includes('bachelor')) return false;
            if (meanGrade < 5) return false; 
        } else { 
            if (!nameLower.includes('bachelor') && !nameLower.includes('degree')) return false;
            if (c.cutoff > points) return false;
        }
        return searchTerms.some(term => nameLower.includes(term.toLowerCase()));
    });

    const sorted = level === 'degree' 
        ? qualified.sort((a,b) => b.cutoff - a.cutoff) 
        : qualified.sort((a,b) => a.name.localeCompare(b.name));

    res.json({ results: sorted.slice(0, 50) });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));