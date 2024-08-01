import React from "react";
import UseEffectHookMore from "../components/02-useEffect-1";

interface Props {}

function UseEffectMousePage(props: Props) {
  const {} = props;

  return (
    <div>
      {/* React useEffectMore Hook*/}
      <h2 className="glow">React useEffect Only Once render Work</h2>
      <div className="content">
        <UseEffectHookMore />
      </div>
    </div>
  );
}

export default UseEffectMousePage;
