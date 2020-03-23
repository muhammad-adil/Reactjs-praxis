import React, { useEffect, useState } from 'react'; // useState is a function, takes initial state as a property
import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";


function App() {
  const [todos, setTodos] =  useState([]); // first item is state itself, 2nd is function used to update state, because todo state is immutable.

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Todo App</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={ todos } toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </header>
    </div>
  );
}

export default App;
