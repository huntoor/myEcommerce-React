const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3001;
console.log(process.env.DEV_PORT);
// const PORT = process.env.DEV_PORT;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming request bodies
// app.use(express.json());
app.use(bodyParser.json());

// Route to get all users
app.get("/api/get", (req, res) => {
    query("SELECT * FROM posts", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    }
    );
});

// Route to get one post
app.get("/api/getFromId/:id", (req, res) => {

    const id = req.params.id;
    query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    }
    );
});

// Route for creating the user
app.post('/api/create', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const myQuery = "INSERT INTO myecommerce.users (username, password, email) VALUES (?,?,?)";

    // console.log(username, email, password);

    db.query(myQuery, [username, password, email], (err, result) => {
        if (err) {
            console.log("=============================================");
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(200).json({ resutl: result });
        console.log(`The Result is: ${result}`);
    });
});

// Route for logging in
app.post('/api/login', (req, res) => {
    const { username, password } = req.body

    const myQuery = `SELECT * FROM myecommerce.users WHERE username = ? AND password = ?`;

    db.query(myQuery, [username, password], (err, resutls) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return; 
          }
      
          // Check if user exists and password is correct
          if (resutls.length === 0) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
          }
      
          // User login successful
          res.status(200).json({ message: 'Login successful' });
    });
});

// Route for like
app.post('/api/like/:id', (req, res) => {

    const id = req.params.id;
    query("UPDATE posts SET likes = likes + 1 WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    }
    );
});

// Route to delete a post
app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;

    query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});