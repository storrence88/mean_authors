//Check the order of everything related to mongoose (require --> connect --> Schema --> Model --> route)
// Setting up Mongoose
const mongoose = require('mongoose');

// Connects to MongoDB
mongoose.connect('mongodb://localhost/authors');