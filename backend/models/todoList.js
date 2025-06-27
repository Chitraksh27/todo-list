const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String,
    status: String,
    deadline: Date,
});

module.exports = mongoose.model('Todo', TodoSchema);
