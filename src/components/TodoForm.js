import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoText);
    setNewTodoText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
