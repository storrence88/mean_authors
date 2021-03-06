const authors = require('../controllers/authors.js')
const path = require('path');

module.exports = (app) => {

    // Index request to show all users
    app.get('/authors', authors.index);

    // Retrieve a specific task by ID
    app.get('/authors/:id', authors.show);

    // POST route to create task
    app.post('/authors', authors.create);

    // Update a specific task by ID
    app.patch('/authors/:id', authors.update);

    // Delete a specific task by ID
    app.delete('/authors/:id', authors.destroy)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}