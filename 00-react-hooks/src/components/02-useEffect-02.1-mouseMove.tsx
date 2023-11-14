import React, { useState, useEffect } from "react";
// 
import UseEffectHookMore from "./02-useEffect-1";

function UseEffectHookMouseMove() {
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button className="button-cst" onClick={()=> setDisplay(!display)}>Toggle Display, Check Console for better understanding of Mount and Unmount of the component</button>
      {display && <UseEffectHookMore /> }
    </div>
  );
}

export default UseEffectHookMouseMove;
