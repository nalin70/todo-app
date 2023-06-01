const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todo-list?authSource=admin');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

const todoRoutes = require('./routes/todo');

app.use('/todos', todoRoutes);


// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
