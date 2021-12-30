//bring dependencies
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express()

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username
        user: 'root',
        //your sql password
        password: 'Suni2013!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);


//queries
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

//return single candidate using id query
// db.query('SELECT * FROM candidates WHERE id = 1', (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

//query for delete operation
// db.query('DELETE FROM candidates WHERE id = ?', 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//query for create candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//             VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err,result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//routes


//Default response for any other request (Not Found) make sure it is last "route" in list 
//or it will overrule other routes 
app.use((req, res) => {
    res.status(404).end();
});


//Listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});