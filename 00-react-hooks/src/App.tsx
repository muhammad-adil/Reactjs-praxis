import React from "react";
import "./App.css";
//
import UseStateHook from "./components/01-use-state";
import UseEffectHook from "./components/02-useEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">React HOOKS 101</header>
      <div className="container">
        {/* React useState Hook*/}
        <h2 className="glow">React useState Hook</h2>
        <div className="content">
          <UseStateHook />
        </div>
        {/*  */}
        {/* React useEffect Hook*/}
        <h2 className="glow">React useEffect Hook</h2>
        <div className="content">
          <UseEffectHook />
        </div>
      </div>
    </div>
  );
}

export default App;
