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

/*Endpoint to get users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
*/
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
