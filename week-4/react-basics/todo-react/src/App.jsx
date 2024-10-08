import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    setTodos([...todos, { title, description }]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <button type="submit">Add Todo</button>
      </form>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
