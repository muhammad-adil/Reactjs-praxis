import React from "react";
import UseStateHook from "../components/01-use-state";

interface Props {}

function UseStatePage(props: Props) {
  // const {} = props
  return (
    <div>
      {/* React useState Hook*/}
      <h2 className="glow">React useState Hook</h2>
      <div className="content">
        <UseStateHook />
      </div>
    </div>
  );
}

export default UseStatePage;
