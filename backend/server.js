const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Indian Recipes Backend Running Successfully");
});

app.get('/recipes', (req, res) => {

    db.query("SELECT * FROM recipes", (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(results);

    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
