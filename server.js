const express = require('express');
const cors = require('cors');
const path = require('path');
//const mongoose = require('mongoose');
const helmet = require('helmet');
const app = express();


/* MIDDLEWARE */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/client/src')));

/* API ENDPOINTS */


/* API ERROR PAGES */


/* REACT WEBSITE */


/* MONGOOSE */


/* START SERVER */
const server = app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port: 8000');
});
