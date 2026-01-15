import csv
import json

# --- CONFIGURATION ---
INPUT_FILE = 'kuthibits.csv'  
OUTPUT_FILE = 'courses.js'    

# --- TRANSLATOR ---
def classify_course(course_name):
    name = course_name.lower()
    if 'education' in name or 'teaching' in name: return 'edu'
    if 'engineer' in name or 'technology' in name: return 'eng'
    if 'medicine' in name or 'nursing' in name or 'health' in name or 'surgery' in name or 'pharmacy' in name or 'dental' in name: return 'med'
    if 'agri' in name or 'environment' in name or 'food' in name or 'horticulture' in name: return 'agri'
    if 'commerce' in name or 'business' in name or 'econ' in name or 'procurement' in name: return 'biz'
    if 'law' in name or 'legal' in name or 'justice' in name: return 'law'
    if 'architect' in name or 'building' in name or 'construction' in name or 'land' in name: return 'arch'
    if 'hospitality' in name or 'tourism' in name or 'hotel' in name: return 'hosp'
    if 'media' in name or 'journalism' in name or 'communication' in name or 'film' in name: return 'media'
    if 'computer' in name or 'information' in name or 'software' in name or 'informatics' in name: return 'it'
    if 'science' in name and 'social' not in name: return 'sci'
    return 'arts'

def convert_csv_to_js():
    courses = []
    id_counter = 1

    try:
        with open(INPUT_FILE, mode='r', encoding='utf-8-sig') as csvfile:
            reader = csv.DictReader(csvfile)
            print(f"Reading Columns: {reader.fieldnames}") 

            for row in reader:
                inst = row.get('INSTITUTION NAME', '').strip()
                prog = row.get('PROGRAMME NAME', '').strip()
                cutoff_str = row.get('CUTOFF - 2023', '0').strip() 

                # 1. SKIP HEADERS
                # If there is no Institution, it's just a label row. Skip it.
                if not inst:
                    continue 

                # 2. PROCESS VALID ROW
                if inst and prog:
                    try:
                        cutoff = float(cutoff_str)
                    except ValueError:
                        cutoff = 0.0

                    if cutoff > 0:
                        courses.append({
                            "id": id_counter,
                            "category": classify_course(prog), # Classify based on the specific name
                            "school": inst,
                            "name": prog, # FIX: Use the specific 'prog' name, not the header!
                            "cutoff": cutoff
                        })
                        id_counter += 1

        # WRITE FILE
        js_content = f"const courses = {json.dumps(courses, indent=4)};\nmodule.exports = courses;"
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(js_content)

        print(f"✅ Success! Processed {len(courses)} courses.")

    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    convert_csv_to_js()