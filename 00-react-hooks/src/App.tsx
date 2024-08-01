import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
//

import UseEffectHookMouseMove from "./components/02-useEffect-02.1-mouseMove";

import IntervalHookCounter from "./components/02.1-IntervalHookCounter";

// import UseEffectHookMouseContainer from "./components/02.1-useEffect-02.2-MouseContainer"
function App() {
  return (
    <div className="App">
      <header className="App-header">React HOOKS 101</header>
      <div className="container">
        
       

        {/* React UseEffect Hook Mouse Container*/}
        <h2 className="glow">React useEffect Toggle</h2>
        <div className="content">
          <UseEffectHookMouseMove />
        </div>



      {/* React UseEffect Hook Mouse Container*/}
      <h2 className="glow">React useEffect IntervalHookCounter</h2>
        <div className="content">
          <IntervalHookCounter />
        </div>


      </div>
    </div>
  );
}

export default App;
