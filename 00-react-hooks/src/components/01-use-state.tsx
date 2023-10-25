import React, { useState } from "react";
import "./../App.css";

function UseStateHook() {
  const initialCount = 0;
  //
  const [count, setCount] = useState(0);
  const [count01, setCount01] = useState(initialCount);
  //
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount01((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <div className="card">
        <h4>React UseState</h4>
        <i>{count}</i>
        <br />
        <button onClick={() => setCount(count + 1)}>Count&nbsp;{count}</button>
      </div>
      <div className="card">
        <h4>React UseState with previous State</h4>
        {/*  */}
        <i>Count: {count01}</i>
        <br />
        <button onClick={() => setCount01(initialCount)}>Reset </button>
        <button onClick={() => setCount01((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount01((prevCount) => prevCount - 1)}>
          Decrement
        </button>
        <button onClick={IncrementFive}>IncrementFive</button>
        {/*  */}
      </div>
    </>
  );
}

export default UseStateHook;
