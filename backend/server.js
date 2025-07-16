const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // change if you have password
  database: 'job_admin'
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Create job
app.post('/api/jobs', (req, res) => {
  const job = req.body;
  const query = `
    INSERT INTO jobs 
    (title, company, location, type, salary_min, salary_max, experience, deadline, description) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    job.title,
    job.company,
    job.location,
    job.type,
    job.salaryMin,
    job.salaryMax,
    job.experience,
    job.deadline,
    job.description
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).send('Error saving job');
    }
    res.send({ success: true, id: result.insertId });
  });
});

// Get all jobs
app.get('/api/jobs', (req, res) => {
  db.query('SELECT * FROM jobs ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('Fetch error:', err);
      return res.status(500).send('Error fetching jobs');
    }
    res.send(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
