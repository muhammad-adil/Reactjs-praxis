import React from "react";
import "./App.css";
//
import UseStateHook from "./components/01-use-state";
import UseEffectHook from "./components/02-useEffect";
import UseEffectHookMouseMove from "./components/02-useEffect-02.1-mouseMove";
import UseEffectHookMore from "./components/02-useEffect-1";

// import UseEffectHookMouseContainer from "./components/02.1-useEffect-02.2-MouseContainer"
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

        {/*  */}
        {/* React useEffectMore Hook*/}
        <h2 className="glow">React useEffect Only Once render Work</h2>
        <div className="content">
          {/* <UseEffectHookMore />  */}
        </div>

        {/* React UseEffect Hook Mouse Container*/}
        <h2 className="glow">React useEffect Toggle</h2>
        <div className="content">
          <UseEffectHookMouseMove />
        </div>
      </div>
    </div>
  );
}

export default App;
