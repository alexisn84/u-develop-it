const mysql = require('mysql2');

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


module.exports = db;