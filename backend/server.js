require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Backend Running Successfully");
});

app.get('/users', (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database Query Failed");
        }

        res.json(results);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
