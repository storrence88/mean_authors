// Express
const express = require("express");
const app = express();

// Body Parser
const bodyParser = require('body-parser');
const path = require('path');

// Mongoose
const mongoose = require('mongoose');
const models = require('./server/models/author.js')

// Connect DB to server
const db_connect = require('./server/config/mongoose.js')

// Using Body Parser
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/dist/client')));

// All Routes
const routes = require('./server/config/routes.js')(app)

// Setting the server to listen on port 6789
let server = app.listen(6789, () => {
    console.log("Running on port 6789");
});