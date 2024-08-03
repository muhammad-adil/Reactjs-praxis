import React, { useState, useEffect } from "react";

function UseEffectMouseHook() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // Mouse Position Checker
  const logMousePosition = (e: { clientX: React.SetStateAction<number>; clientY: React.SetStateAction<number>; }) => {
    console.log("Mouse event in UseEffectHookMore");
    setX(e.clientX);
    setY(e.clientY);
  };

  // useEffect hook for Once
  useEffect(() => {
    console.log("useFffect called in UseEffectHookMore");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component unmounting code in UseEffectHookMore");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  
  return (
    <div>
      Hooks - X - {x} Y - {y}
    </div>
  );
}

export default UseEffectMouseHook;
