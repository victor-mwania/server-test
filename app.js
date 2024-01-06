'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const { dbConnect } = require('./database/');

dbConnect()
const app = express();
const port =  process.env.PORT || 3000;

app.use(bodyParser.json())
// set the view engine to ejs
app.set('view engine', 'ejs');

// routes
app.use('/', require('./routes/profile')());
app.use('/comment', require('./routes/comment')());

// start server
const server = app.listen(port);
console.log('Express started. Listening on %s', port);
