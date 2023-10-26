import React, { useState } from "react";
import "./../App.css";

interface IUser {
  firstName: string;
  lastName: string;
}

function UseStateHook() {
  const initialCount = 0;
  //
  const [count, setCount] = useState(0);
  const [count01, setCount01] = useState(initialCount);

  // useState with Object
  const [name, setName] = useState<IUser>({ firstName: "", lastName: "" });

  //
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount01((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <div className="card">
        <h4>React UseState</h4>
        <i>{count}</i>
        <br />
        <button onClick={() => setCount(count + 1)}>Count&nbsp;{count}</button>
      </div>
      <div className="card">
        <h4>React UseState with previous State</h4>
        {/*  */}
        <i>Count: {count01}</i>
        <br />
        <button onClick={() => setCount01(initialCount)}>Reset </button>
        <button onClick={() => setCount01((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount01((prevCount) => prevCount - 1)}>
          Decrement
        </button>
        <button onClick={IncrementFive}>IncrementFive</button>
      </div>
      {/*  */}
      {/* useState with Object */}
      <div className="card">
        <h4>useState with Object</h4>
        <form>
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
          <h4>Your first Nmae is {name.firstName}</h4>
          <h4>Your last Nmae is {name.lastName}</h4>
          {/*  */}
          <h6>{JSON.stringify(name)}</h6>
        </form>
      </div>

      {/*  */}
      {/* useState with Array */}
      <div className="card">
        <h4>useState with Array</h4>
        {/* <form>
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
          <h4>Your first Nmae is {name.firstName}</h4>
          <h4>Your last Nmae is {name.lastName}</h4>
          <h6>{JSON.stringify(name)}</h6>
        </form> */}
      </div>
    </>
  );
}

export default UseStateHook;
