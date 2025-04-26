const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
require('dotenv').config();

// Allow frontend access (CORS)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});


// Route to get players
app.get('/players', (req, res) => {
  db.query('SELECT player_id, name FROM players', (err, results) => {
    if (err) {
      console.error('Error fetching players:', err);
      res.status(500).json({ error: 'Database query error' });
      return;
    }
    res.json(results);
  });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});