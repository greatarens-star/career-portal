// --- 1. GLOBALS & SETUP ---
let fetchedCourses = [];
let currentUser = { name: "Guest", index: "N/A", hasPaid: 0 }; 
let currentScore = 0;
let currentCategory = "";

// --- 2. POPULATE DROPDOWNS ON LOAD ---
// This runs immediately when the page loads
const gradeList = [{val:12,txt:"A"},{val:11,txt:"A-"},{val:10,txt:"B+"},{val:9,txt:"B"},{val:8,txt:"B-"},{val:7,txt:"C+"},{val:6,txt:"C"},{val:5,txt:"C-"},{val:4,txt:"D+"},{val:3,txt:"D"},{val:2,txt:"D-"},{val:1,txt:"E"},{val:0,txt:"Not Taken"}];

// Fill all grade dropdowns
document.querySelectorAll('.grade-select').forEach(s => {
    gradeList.forEach(g => { 
        let o = document.createElement('option'); 
        o.value = g.val; 
        o.innerText = g.txt; 
        if(g.val===0) o.selected=true; 
        s.appendChild(o); 
    });
});

// Fill Technical Subjects
const techSubjects = ["Agriculture","Business Studies","Computer Studies","Home Science","French","German","Music","Aviation"];
const techDropdown = document.getElementById('tech-subject-name');
if(techDropdown) {
    techSubjects.sort();
    techSubjects.forEach(s => { 
        let o = document.createElement('option'); 
        o.value = s; 
        o.innerText = s; 
        techDropdown.appendChild(o); 
    });
}

// --- 3. NAVIGATION ---
function showSection(sectionId) {
    document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    document.getElementById('score-modal').classList.add('hidden');
}

function closeModal() { document.getElementById('score-modal').classList.add('hidden'); }
function logout() { location.reload(); }

// --- 4. AUTHENTICATION ---
// (Your existing login/signup logic was okay, keeping it here)
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
        if (response.ok) { alert("Registration Successful!"); showSection('auth-selection'); } // Changed to show selection
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
            currentUser.name = data.user.name;
            currentUser.index = index;
            // Check if user already paid previously
            currentUser.hasPaid = data.user.hasPaid || 0; 
            
            document.getElementById('nav-username').innerText = currentUser.name;
            showSection('dashboard-section');
        } else { alert("Login Failed"); }
    } catch (err) { alert("Server Error"); }
});

// --- 5. CALCULATOR LOGIC ---
document.getElementById('calculatorForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Collect Grades using CORRECT IDs
    function getVal(id) { const el = document.getElementById(id); return el ? Number(el.value) : 0; }
    
    const grades = {
        math: getVal('math'), eng: getVal('eng'), kis: getVal('kis'),
        bio: getVal('bio'), phy: getVal('phy'), chem: getVal('chem'),
        hum1: getVal('hist'), hum2: getVal('geo'), hum3: getVal('cre'), // Fixed IDs to match HTML
        tech: getVal('tech-subject-grade') // Fixed ID
    };

    currentCategory = document.getElementById('career-field').value;
    if (!currentCategory) { alert("Please select a course field"); return; }

    // 2. Logic
    const humGrades = [grades.hum1, grades.hum2, grades.hum3];
    const bestHum = Math.max(...humGrades);
    
    // Aggregate (Sum of best 7)
    let allArr = Object.values(grades).sort((a,b) => b-a);
    let api = 0; 
    for(let i=0; i<7; i++) api += allArr[i];

    // Cluster Formula
    let r = 0;
    const g = grades;
    
    // Basic logic based on category (Simplified)
    if(currentCategory === 'eng') r = g.math + g.phy + g.chem + g.eng;
    else if(currentCategory === 'med') r = g.bio + g.chem + g.math + g.eng;
    else r = g.math + g.eng + bestHum + g.tech; // Default fallback

    const w = Math.sqrt((r / 48) * (api / 84)) * 48;
    currentScore = w; 

    // 3. SHOW MODAL
    document.getElementById('modal-points').innerText = w.toFixed(3);
    document.getElementById('score-modal').classList.remove('hidden');
    
    // UPDATE BUTTON TEXT BASED ON PAYMENT
    const btn = document.querySelector('#score-modal .primary-btn');
    if(currentUser.hasPaid === 1) {
         btn.innerText = "👉 See Courses (Paid ✅)";
         btn.onclick = viewDetailedResults;
    } else {
         btn.innerText = "👉 Unlock Results (KES 50)";
         btn.onclick = initiatePayment;
    }
});

// --- 6. PAYSTACK PAYMENT (LIVE) ---
function initiatePayment() {
    const btn = document.querySelector('#score-modal .primary-btn');
    btn.innerText = "Processing...";

    const handler = PaystackPop.setup({
        // 👇 PASTE YOUR LIVE PUBLIC KEY HERE 👇
        key: 'pk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 
        
        email: currentUser.index + "@student.ke",
        amount: 50 * 100, // KES 50
        currency: 'KES',
        callback: function(response) {
            currentUser.hasPaid = 1;
            alert("Payment Successful! ✅");
            viewDetailedResults();
        },
        onClose: function() {
            alert("Payment cancelled.");
            btn.innerText = "👉 Unlock Results (KES 50)";
        }
    });
    handler.openIframe();
}

// --- 7. VIEW RESULTS ---
async function viewDetailedResults() {
    showSection('results-page');
    
    const container = document.getElementById('course-list-container');
    container.innerHTML = '<p>Loading official courses...</p>';

    try {
        const response = await fetch('/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ points: currentScore, category: currentCategory })
        });
        const data = await response.json();

        let html = "";
        if (data.results && data.results.length > 0) {
            data.results.forEach(c => {
                html += `<div class="course-card"><h4>${c.name}</h4><p>${c.school} | Cutoff: ${c.cutoff}</p></div>`;
            });
        } else {
            html = "<p style='padding:20px; text-align:center;'>No matching courses found for your cluster points.</p>";
        }
        container.innerHTML = html;
    } catch (e) {
        container.innerHTML = "<p>Error loading results.</p>";
    }
}