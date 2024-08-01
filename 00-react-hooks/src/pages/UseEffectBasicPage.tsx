import React from "react";
import UseEffectHook from "../components/02-useEffect";
interface Props {}

function UseEffectBasicPage(props: Props) {
  const {} = props;

  return (
    <div>
      {/* React useEffect Hook*/}
      <h2 className="glow">React useEffect Hook</h2>
      <div className="content">
        <UseEffectHook />
      </div>
    </div>
  );
}

export default UseEffectBasicPage;
