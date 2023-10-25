import React from "react";
import logo from "./logo.svg";
import "./App.css";
//
import UseStateHook from "./components/01-use-state";
function App() {
  return (
    <div className="App">
      <header className="App-header">React HOOKS 101</header>
      <div className="container">
        <div className="content">
          <UseStateHook />
        </div>
      </div>
    </div>
  );
}

export default App;
