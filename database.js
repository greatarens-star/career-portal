// database.js
const sqlite3 = require('sqlite3').verbose();

// This creates a file named 'users.db' automatically
const dbName = 'users.db';

let db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
        
        // Create the 'users' table
        // 'index_number' is the PRIMARY KEY so no duplicates allowed
        db.run(`CREATE TABLE IF NOT EXISTS users (
            index_number TEXT PRIMARY KEY,
            full_name TEXT,
            password TEXT
        )`, (err) => {
            if (err) {
                console.error("Error creating table:", err.message);
            } else {
                console.log("Users table is ready.");
            }
        });
    }
});

module.exports = db;