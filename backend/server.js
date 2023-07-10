const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'blog_app',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database!');
});

 
//create the end points here
// Create a task
app.post('/tasks', (req, res) => {
    const { title, content } = req.body;
    const query = 'INSERT INTO blog_posts (title, content) VALUES (?, ?)';
    db.query(query, [title, content], (err, result) => {
      if (err) {
        console.error('Error creating the task: ', err);
        res.status(500).json({ error: 'Failed to create the task' });
        return;
      }
      console.log('Task created successfully');
      res.status(200).json({ message: 'Task created successfully' });
    });
  });

  // Fetch all tasks
    app.get('/tasks', (req, res) => {
        const query = 'SELECT * FROM blog_posts';
        db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching tasks: ', err);
            res.status(500).json({ error: 'Failed to fetch tasks' });
            return;
        }
        res.status(200).json(results);
        });
    });

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });