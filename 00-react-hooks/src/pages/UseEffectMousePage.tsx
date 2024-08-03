import React from "react";
import UseEffectMouseHook from "../components/02-useEffect-1";
import UseEffectHookMouseMove from "../components/02-useEffect-02.1-mouseMove";

interface Props {}

function UseEffectMousePage(props: Props) {
  const {} = props;

  return (
    <div>
      {/* React useEffectMore Hook*/}
      <h2 className="glow">React useEffect Only Once render Work</h2>
      <div className="content">
        <UseEffectMouseHook />
      </div>
      <div className="content">
        <UseEffectHookMouseMove />
      </div>
    </div>
  );
}

export default UseEffectMousePage;
