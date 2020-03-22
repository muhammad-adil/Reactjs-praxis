import React, { useState } from 'react'; // useState is a function, takes initial state as a property
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] =  useState([]); // first item is state itself, 2nd is function used to update state, because todo state is immutable.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Todo App</h2>
      </header>
    </div>
  );
}

export default App;
