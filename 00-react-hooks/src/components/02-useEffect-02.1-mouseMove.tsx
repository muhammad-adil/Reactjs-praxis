import React, { useState, useEffect } from "react";

function UseEffectHookMouseMove() {
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
      Hooks - X - {x} Y - {y}
    </div>
  );
}

export default UseEffectHookMouseMove;
