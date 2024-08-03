import React from "react";
import UseEffectHook from "../components/02-useEffect";
import DataFetching from "../components/02.2-useEffect-DataFetching";
import DataFetchingById from "../components/02.2-useEffect-DataFetchingById";
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
      {/* React useEffect Hook Data Fetching */}
      <h2 className="glow">React useEffect Hook Data Fetching</h2>
      <div className="content">
        <DataFetching />
      </div>

      {/* React useEffect Hook Data Fetching By ID */}
      <h2 className="glow">React useEffect Hook Data Fetching By ID</h2>
      <div className="content">
        <DataFetchingById />
      </div>
    </div>
  );
}

export default UseEffectBasicPage;
