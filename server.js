const axios = require('axios');
const express = require('express');
const { Pool } = require('pg'); 
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
    ssl: { rejectUnauthorized: false }
});

// --- DATABASE INIT & MIGRATION ---
// 1. Create Users Table
pool.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY, 
        index_number VARCHAR(50) UNIQUE NOT NULL, 
        full_name VARCHAR(100), 
        password VARCHAR(255),
        has_paid INTEGER DEFAULT 0
    );
`, (err) => {
    if (err) console.error("❌ DB Init Error:", err);
    else {
        // 2. AUTO-MIGRATION: Add 'grades' column if it doesn't exist yet
        pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS grades TEXT`, (err2) => {
            if(err2) console.log("⚠️ Migration Note: " + err2.message);
            else console.log("✅ Users Table & Grades Column Ready");
        });
    }
});

// --- AUTH ROUTES ---
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
        
        // Return user info AND their saved grades (if any)
        res.json({ 
            message: "Success", 
            user: { 
                name: user.full_name, 
                index: user.index_number, 
                hasPaid: user.has_paid,
                grades: user.grades ? JSON.parse(user.grades) : null // Send grades back
            } 
        });
    } catch (err) { res.status(500).json({ error: "Server Error" }); }
});

// --- SAVE GRADES ROUTE (New!) ---
app.post('/save-grades', async (req, res) => {
    const { index_number, grades } = req.body;
    try {
        // Save the grades object as a Text String (JSON)
        await pool.query(
            `UPDATE users SET grades = $1 WHERE index_number = $2`, 
            [JSON.stringify(grades), String(index_number)]
        );
        res.json({ success: true });
    } catch (err) {
        console.error("Save Error:", err);
        res.status(500).json({ error: "Could not save grades" });
    }
});

// --- PAYMENT ROUTES ---
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

// --- RECOMMENDATION ENGINE ---
app.post('/recommend', (req, res) => {
    const { points, category, level, meanGrade } = req.body;
    
    const keywords = {
        'edu': ['Education', 'Teaching', 'Early Childhood', 'Special Needs', 'B.Ed'],
        'eng': ['Engineering', 'Civil', 'Electrical', 'Mechanical', 'Mechatronic', 'Geospatial', 'Structural', 'Telecommunication'], 
        'med': ['Medicine', 'Nursing', 'Surgery', 'Clinical', 'Pharmacy', 'Health', 'Doctor', 'Radiography', 'Medical', 'Dental'],
        'agri': ['Agriculture', 'Agribusiness', 'Horticulture', 'Food Science', 'Soil', 'Animal', 'Farm'],
        'biz': ['Business', 'Commerce', 'Economics', 'Finance', 'Accounting', 'Procurement', 'Entrepreneurship', 'Human Resource'],
        'law': ['Law', 'Legal', 'Justice'],
        'arts': ['Sociology', 'Psychology', 'Criminology', 'Gender', 'Development Studies', 'International Relations', 'Political', 'Anthropology', 'Social Work'], 
        'pure': ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'Statistics', 'Biochemistry', 'Microbiology', 'Actuarial', 'Science'],
        'arch': ['Architecture', 'Real Estate', 'Surveying', 'Quantity', 'Urban', 'Landscape', 'Construction'],
        'hosp': ['Hospitality', 'Tourism', 'Travel', 'Hotel', 'Catering', 'Leisure'],
        'media': ['Media', 'Communication', 'Journalism', 'Film', 'Public Relations', 'Broadcasting'],
        'it': ['Computer', 'Software', 'Information Technology', 'Cyber', 'Data', 'Systems', 'Informatics']
    };

    const searchTerms = keywords[category] || [];
    const safeLevel = level.toLowerCase().trim();

    const qualified = courseList.filter(c => {
        const nameLower = c.name.toLowerCase();
        
        if (safeLevel === 'diploma') {
            if (!nameLower.includes('diploma')) return false;
            if (nameLower.includes('degree') || nameLower.includes('bachelor')) return false;
            if (meanGrade < 5) return false; 
        } else if (safeLevel === 'degree') {
            if (!nameLower.includes('degree') && !nameLower.includes('bachelor')) return false;
            if (nameLower.includes('diploma')) return false;
            if (c.cutoff > points) return false;
        } else { return false; }

        return searchTerms.some(term => nameLower.includes(term.toLowerCase()));
    });

    const sorted = safeLevel === 'degree' 
        ? qualified.sort((a,b) => b.cutoff - a.cutoff) 
        : qualified.sort((a,b) => a.name.localeCompare(b.name));

    res.json({ results: sorted.slice(0, 50) });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));