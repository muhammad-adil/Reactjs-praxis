import React, { useState, useEffect } from "react";

function UseEffectHookMouseContainer() {
  const [display, setDisplay] = useState(true)
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // Mouse Position Checker
  const logMousePosition = (e: { clientX: React.SetStateAction<number>; clientY: React.SetStateAction<number>; }) => {
    // console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  // useEffect hook for Once
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      // console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
      {display && <p>Hooks - X - {x} Y - {y}</p> }
    </div>
  );
}

export default UseEffectHookMouseContainer;
