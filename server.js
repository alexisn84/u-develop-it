//bring dependencies
const express = require('express');
const res = require('express/lib/response');
//const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const { result } = require('lodash');

const PORT = process.env.PORT || 3001;
const app = express()

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);


//queries and routes

//Default response for any other request (Not Found) make sure it is last "route" in list 
//or it will overrule other routes 
app.use((req, res) => {
    res.status(404).end();
});


//Listen
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
});

