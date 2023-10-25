import React, { useState } from "react";
import "./../App.css";

function UseStateHook() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h2>React UseState</h2>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default UseStateHook;
