const express = require('express');
const router = express.Router();
const Todo = require('./models/todo');

// Get all todos
router.route('/').get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a new todo
router.route('/add').post((req, res) => {
  const newTodo = new Todo({
    description: req.body.description,
    completed: req.body.completed,
  });

  newTodo
    .save()
    .then(() => res.json('Todo added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
