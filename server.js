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

// --- DATABASE ---
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) console.error("❌ DB Error:", err.message);
    else console.log("✅ Database Connected");
});
db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, index_number TEXT UNIQUE, full_name TEXT, password TEXT)`);

// --- AUTH ROUTES ---
app.post('/signup', (req, res) => {
    const { index_number, full_name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    db.run(`INSERT INTO users (index_number, full_name, password) VALUES (?, ?, ?)`, 
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
        res.json({ message: "Success", user: { name: user.full_name } });
    });
});

// --- STRICT RECOMMENDATION ENGINE ---
app.post('/recommend', (req, res) => {
    const { points, category, level, meanGrade } = req.body;
    
    console.log(`🔍 FILTER: Level=[${level}] | Field=[${category}] | Points=[${points}]`);

    // KEYWORDS
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

        // --- 1. THE STRICT BOUNCER (Level Check) ---
        if (level === 'diploma') {
            // MUST contain 'diploma'
            if (!nameLower.includes('diploma')) return false;
            // MUST NOT contain 'degree' or 'bachelor' (Double check)
            if (nameLower.includes('degree') || nameLower.includes('bachelor')) return false;
            
            // Grade Check for Diploma (C- minimum usually)
            if (meanGrade < 5) return false; 
        } 
        else { 
            // DEGREE MODE (Default)
            // MUST contain 'bachelor' or 'degree'
            if (!nameLower.includes('bachelor') && !nameLower.includes('degree')) return false;
            // Must meet Cutoff Points
            if (c.cutoff > points) return false;
        }

        // --- 2. CATEGORY CHECK ---
        const isMatch = searchTerms.some(term => nameLower.includes(term.toLowerCase()));
        
        return isMatch;
    });

    console.log(`✅ Found ${qualified.length} matches for ${level}`);
    
    // Sort logic: Degrees by Cutoff, Diplomas alphabetically
    const sorted = level === 'degree' 
        ? qualified.sort((a,b) => b.cutoff - a.cutoff) 
        : qualified.sort((a,b) => a.name.localeCompare(b.name));

    res.json({ results: sorted.slice(0, 50) });
});

// --- 💰 PAYMENT ROUTE ---
app.post('/pay', async (req, res) => {
    const { email, amount } = req.body; 

    // 👇👇👇 PASTE YOUR KEY INSIDE THE QUOTES BELOW 👇👇👇
    const secretKey = sk_test_8af776d51934a2ce11e4b7a92b67cf7db654cca8 || 'PASTE_YOUR_SK_TEST_KEY_HERE'; 
    // 👆👆👆 REPLACE 'PASTE_YOUR_SK_TEST_KEY_HERE' with your real key

    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email: email,
            amount: amount * 100, // KES to Cents
            currency: "KES",
            callback_url: "https://career-portal-y64y.onrender.com" // IMPORTANT: Replace with your actual Render URL
        }, {
            headers: { Authorization: `Bearer ${secretKey}`, 'Content-Type': 'application/json' }
        });
        res.json({ authorization_url: response.data.data.authorization_url });
    } catch (error) {
        console.error("Paystack Error:", error.message);
        res.status(500).json({ error: "Payment failed" });
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));