const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({ // Todo Blueprint
    text: { type: String, require: true },// Type is string, it IS required
    completed: { type: Boolean, default: false },// Tracks if the Todo is completed
    createdAt: { type: Date, default: Date.now },// Tracks when the Todo was created
});

const Todo = mongoose.model('Todo', todoSchema);// This creates a model called Todo
module.exports = Todo // This makes the Todo model available to other files

// This sets up the structure of the Todo in MongoDB.