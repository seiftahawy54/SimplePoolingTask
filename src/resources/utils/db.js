const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const DB_PATH = path.resolve(path.join(__dirname, "/db/app.db"));

const db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, err => {
  if (err) {
    console.error(err.message);
  }
});

module.exports = db;
