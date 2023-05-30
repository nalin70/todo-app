import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/todos').then((response) => {
      setTodos(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/todos/add', {
        description,
        completed: false,
      })
      .then((response) => {
        console.log(response.data);
        setDescription('');
        setTodos([...todos, response.data]);
      });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.description} - {todo.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
