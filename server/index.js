const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const PORT = 8080
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projectsDB'
});

//ROUTE
app.get("/db", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
            console.log('Connected!');
        }
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost/${PORT}/`);
});