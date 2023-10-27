import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //
  // useEffect hook for conditional render only
  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <>
      <div className="card">
        <div className="card__content">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* setCount Button on title */}
          <button onClick={() => setCount(count + 1)}>
            Click {count} times
          </button>
        </div>
      </div>
    </>
  );
}

export default UseEffectHook;
