const mongoose = require('mongoose');

// Author Schema with backend validations
let AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must enter an author's name"],
        minlength: [3, "Name must be at least 3 characters"]
    },
}, { timestamps: true });

mongoose.model('Author', AuthorSchema); // Setting this Schema in Models as 'Author'