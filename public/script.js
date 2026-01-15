// GLOBAL VARIABLES TO STORE USER DATA
let currentUser = { name: "Guest", index: "N/A" };
let currentScore = 0;
let currentCategory = "";

// --- NAVIGATION ---
function showSection(sectionId) {
    document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    // Also hide modal if open
    document.getElementById('score-modal').classList.add('hidden');
}

function closeModal() {
    document.getElementById('score-modal').classList.add('hidden');
}

function logout() { location.reload(); }

// --- AUTHENTICATION ---
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const index = document.getElementById('signup-index').value;
    const name = document.getElementById('signup-name').value;
    const password = document.getElementById('signup-pass').value;

    try {
        const response = await fetch('/signup', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index_number: index, full_name: name, password: password })
        });
        if (response.ok) { alert("Registration Successful!"); showSection('login-section'); }
        else { alert("Registration Failed. Index may exist."); }
    } catch (err) { alert("Server Error"); }
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const index = document.getElementById('login-index').value;
    const password = document.getElementById('login-pass').value;

    try {
        const response = await fetch('/login', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index_number: index, password: password })
        });
        const data = await response.json();

        if (response.ok) {
            // SAVE USER DATA LOCALLY FOR THE REPORT
            currentUser.name = data.user.name;
            currentUser.index = index;
            document.getElementById('nav-username').innerText = currentUser.name;
            
            showSection('dashboard-section');
        } else { alert("Login Failed"); }
    } catch (err) { alert("Server Error"); }
});

// --- CALCULATOR LOGIC ---
document.getElementById('calculatorForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Collect Grades
    function getVal(id) { const el = document.getElementById(id); return el ? Number(el.value) : 0; }
    
    const grades = {
        math: getVal('math'), eng: getVal('eng'), kis: getVal('kis'),
        bio: getVal('bio'), phy: getVal('phy'), chem: getVal('chem'),
        hum1: getVal('hum1'), hum2: getVal('hum2'), hum3: getVal('hum3'),
        tech: getVal('tech1'), lang: getVal('lang1')
    };
    // --- POPULATE TECHNICAL SUBJECTS LIST ---
        const techSubjects = [
            "Agriculture", "Home Science", "Art and Design", "Computer Studies",
            "Building Construction", "Wood Technology", "Metal Technology",
            "Electricity", "Power Mechanics", "Drawing and Design", "Aviation Technology",
            "French", "German", "Arabic", "Kenya Sign Language", "Music", "Business Studies"
        ];

        const techDropdown = document.getElementById('tech-subject-name');
        
        // Sort alphabetically so it's easy to find
        techSubjects.sort(); 

        techSubjects.forEach(sub => {
            let opt = document.createElement('option');
            opt.value = sub; // The value sent to backend
            opt.innerText = sub; // What the user sees
            techDropdown.appendChild(opt);
        });
    currentCategory = document.getElementById('career-field').value;

    if (!currentCategory) { alert("Please select a course field"); return; }

    // 2. Logic (Best of Logic)
    const bestHum = Math.max(grades.hum1, grades.hum2, grades.hum3);
    const bestTech = Math.max(grades.tech, grades.lang);
    const allOptionals = [grades.bio, grades.phy, grades.chem, grades.hum1, grades.hum2, grades.hum3, grades.tech, grades.lang];
    const bestOverall = Math.max(...allOptionals);

    // Aggregate
    let allArr = Object.values(grades).sort((a,b) => b-a);
    let api = 0; for(let i=0; i<7; i++) api += allArr[i];

    // Cluster Formula
    let r = 0;
    const g = grades;
    switch (currentCategory) {
        case 'edu': r = g.eng + g.math + g.kis + bestOverall; break;
        case 'eng': r = g.math + g.phy + g.chem + g.eng; break;
        case 'med': r = g.bio + g.chem + g.math + g.eng; break;
        case 'agri': r = g.bio + g.chem + g.hum2 + g.math; break;
        case 'biz': r = g.math + g.eng + g.tech + g.hum2; break;
        case 'law': r = g.eng + g.hum1 + g.math + g.kis; break;
        case 'arts': r = g.eng + g.kis + g.hum1 + g.hum2; break;
        case 'sci': r = g.math + g.bio + g.chem + g.phy; break;
        case 'arch': r = g.math + g.phy + Math.max(bestHum, bestTech) + g.eng; break;
        case 'hosp': r = g.eng + bestHum + g.math + bestTech; break;
        case 'media': r = g.eng + g.kis + Math.max(bestHum, bestTech) + g.math; break;
        case 'it': r = g.math + g.phy + g.eng + Math.max(bestHum, bestTech); break;
    }

    const w = Math.sqrt((r / 48) * (api / 84)) * 48;
    currentScore = w; // Save globally

    // 3. SHOW POPUP (STEP 1)
    document.getElementById('popup-score').innerText = w.toFixed(3);
    document.getElementById('score-modal').classList.remove('hidden');
});

// --- VIEW DETAILED RESULTS (STEP 2) ---
async function viewDetailedResults() {
    // 1. Switch to Results Page
    showSection('results-page');

    // 2. Fill User Details
    document.getElementById('report-name').innerText = currentUser.name;
    document.getElementById('report-index').innerText = currentUser.index;
    document.getElementById('report-points').innerText = currentScore.toFixed(3);
    
    const container = document.getElementById('course-list-container');
    container.innerHTML = '<p style="text-align:center;">🔄 Retrieving official course list...</p>';

    // 3. Fetch Data from Server
    try {
        const response = await fetch('/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ points: currentScore, category: currentCategory })
        });
        const data = await response.json();

        // 4. Render Table
        if (data.results && data.results.length > 0) {
            let html = "";
            data.results.forEach(course => {
                html += `
                <div class="course-card">
                    <h4>${course.name}</h4>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:bold; color:#555;">${course.school}</span>
                        <span class="cutoff-badge">Cutoff: ${course.cutoff}</span>
                    </div>
                </div>`;
            });
            container.innerHTML = html;
        } else {
            container.innerHTML = `
            <div style="text-align:center; padding:20px; color:#c0392b;">
                <h3>⚠️ Highly Competitive</h3>
                <p>Your points (${currentScore.toFixed(3)}) are below the 2023 cutoff for this specific category.</p>
                <p>Consider trying a different category like Arts or Agriculture.</p>
            </div>`;
        }
    } catch (e) {
        container.innerHTML = "<p>Error connecting to database.</p>";
    }
}