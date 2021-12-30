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