import csv
import json
import re

INPUT_FILE = 'diploma.csv'   # Your Excel-to-CSV file
EXISTING_JS = 'courses.js'   # The existing Degree database

# Map your new categories to the 15 requested branches
def get_category(name):
    n = name.lower()
    if 'educ' in n or 'teach' in n: return 'edu'
    if 'engineer' in n or 'elect' in n or 'auto' in n or 'mech' in n: return 'eng'
    if 'health' in n or 'nurs' in n or 'med' in n or 'pharm' in n: return 'med'
    if 'agri' in n or 'food' in n: return 'agri'
    if 'busin' in n or 'comm' in n or 'account' in n or 'supply' in n: return 'biz'
    if 'law' in n or 'legal' in n: return 'law'
    if 'soci' in n or 'commu' in n or 'dev' in n: return 'soc'
    if 'scien' in n and 'social' not in n: return 'sci'
    if 'build' in n or 'const' in n or 'quan' in n: return 'arch'
    if 'hosp' in n or 'tour' in n or 'cater' in n: return 'hosp'
    if 'media' in n or 'journ' in n or 'art' in n: return 'media'
    if 'comp' in n or 'info' in n or 'ict' in n: return 'it'
    if 'mari' in n or 'avia' in n or 'trans' in n: return 'trans'
    if 'hair' in n or 'beauty' in n or 'fash' in n: return 'beauty'
    return 'tvet' # Fallback for general Technical skills

# Grade Mapping (A=12... D-=2)
grade_map = {'A':12, 'A-':11, 'B+':10, 'B':9, 'B-':8, 'C+':7, 'C':6, 'C-':5, 'D+':4, 'D':3, 'D-':2, 'E':1}

def parse_requirements(req_string):
    if not req_string or req_string.strip() == '': return None
    requirements = {}
    # Clean: "BIO: D+" -> parts
    req_string = req_string.upper().replace(" :", ":").replace(": ", ":")
    parts = re.split(r'[, ]+', req_string)
    
    for part in parts:
        if ':' in part:
            subj, grd = part.split(':')
            # Handle substitutions seen in your image (HSC/AGR)
            if 'HSC/AGR' in subj: subj = 'tech1' 
            elif 'ENG/KIS' in subj: subj = 'eng_kis'
            elif 'BIO' in subj: subj = 'bio'
            elif 'CHE' in subj: subj = 'chem'
            elif 'PHY' in subj: subj = 'phy'
            elif 'MAT' in subj: subj = 'math'
            elif 'ENG' in subj: subj = 'eng'
            
            score = grade_map.get(grd, 3) 
            requirements[subj.lower()] = score
    return requirements

def process_diplomas():
    new_courses = []
    try:
        # 1. READ EXISTING DEGREES
        with open(EXISTING_JS, 'r', encoding='utf-8') as f:
            content = f.read()
            json_str = content.replace('const courses = ', '').replace('module.exports = courses;', '').strip()
            if json_str.endswith(';'): json_str = json_str[:-1]
            existing_data = json.loads(json_str)

        # 2. READ NEW DIPLOMAS
        with open(INPUT_FILE, mode='r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                name = row.get('PROGRAMME NAME', row.get('Programme Name', '')).strip()
                inst = row.get('INSTITUTION NAME', row.get('Institution Name', '')).strip()
                req_str = row.get('SUBJECT REQUIREMENTS', '') # Matches your PDF column

                if name:
                    new_courses.append({
                        "id": f"dip_{len(new_courses)}",
                        "category": get_category(name),
                        "level": "diploma", # THIS IS THE KEY TAG
                        "school": inst,
                        "name": name,
                        "cutoff": 0,
                        "requirements": parse_requirements(req_str)
                    })

        # 3. MERGE (Degrees + Diplomas)
        combined = existing_data + new_courses
        
        # 4. SAVE
        js_content = f"const courses = {json.dumps(combined, indent=4)};\nmodule.exports = courses;"
        with open(EXISTING_JS, 'w', encoding='utf-8') as f:
            f.write(js_content)
            
        print(f"✅ Safe Merge Complete! Database now has {len(combined)} total courses.")
        
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    process_diplomas()