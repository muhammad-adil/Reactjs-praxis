import React, { useState } from "react";
import "./../App.css";

interface IUser {
  firstName: string;
  lastName: string;
}

interface IItems {
  id: number;
  value: number;
}

//
function UseStateHook() {
  const initialCount = 0;
  //
  const [count, setCount] = useState(0);
  const [count01, setCount01] = useState(initialCount);

  // useState with Object
  const [name, setName] = useState<IUser>({ firstName: "", lastName: "" });

  // useState with Array
  const [items, setItems] = useState<IItems[]>([]);
  //
  //
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount01((prevCount) => prevCount + 1);
    }
  };
  //
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 10 + 1,
      },
    ]);
  };

  return (
    <>
      <br />
      <div className="card">
        <h4>Summary - useState</h4>
        <div className="card__content">
          <ul className="card__content__list">
            <li>
              The useState hook lets you add state to functional components. In
              classes, the state is always an object.
            </li>
            <li>
              With the useState hook, the state doesn't have to be an object.
            </li>
            <li>
              The useState hook returns an array with 2 elements. The first
              element is the current value of the state, and the second element
              is a state setter function.
            </li>
            <li>
              New state value depends on the previous state value? You can pass
              a function to the setter function.
            </li>

            <li>
              When dealing with objects or arrays, always make sure to spread
              your state variable and then call the setter function
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
      <div className="card">
        <h4>React UseState</h4>
        <div className="card__content">
          <i>{count}</i>
          <br />
        </div>
        <button className="card__btn" onClick={() => setCount(count + 1)}>
          Count&nbsp;{count}
        </button>
      </div>
      {/*  */}
      {/* React UseState with previous State */}
      <div className="card">
        <h4>React UseState with previous State</h4>
        <div className="card__content">
          <i>Count: {count01}</i>
        </div>
        <div className="btn-container">
          <button
            className="card__btn"
            onClick={() => setCount01(initialCount)}
          >
            Reset{" "}
          </button>
          <button
            className="card__btn"
            onClick={() => setCount01((prevCount) => prevCount + 1)}
          >
            Increment
          </button>
          <button
            className="card__btn"
            onClick={() => setCount01((prevCount) => prevCount - 1)}
          >
            Decrement
          </button>
          <button className="card__btn" onClick={IncrementFive}>
            IncrementFive
          </button>
        </div>
      </div>
      {/*  */}
      {/* useState with Object */}
      <div className="card">
        <h4>useState with Object</h4>
        <div className="card__content form__obj__names">
          <form>
            <label htmlFor="firstName" className="form__label">
              First Name
            </label>
            <input
              type="text"
              className="form__input"
              id="firstName"
              placeholder="First name"
              value={name.firstName}
              onChange={(e) => setName({ ...name, firstName: e.target.value })}
            />
            {/*  */}
            {/* <br /> */}
            <label htmlFor="lastName" className="form__label">
              Last Name
            </label>
            <input
              type="text"
              className="form__input"
              id="lastName"
              placeholder="Last name"
              value={name.lastName}
              onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
            <h4 className="d-inline">
              Your first Name is <span>{name.firstName}</span>
            </h4>
            &nbsp;&amp;&nbsp;
            <h4 className="d-inline">
              Your last Name is <span>{name.lastName}</span>
            </h4>
            {/*  */}
            {/* <h6>{JSON.stringify(name)}</h6> */}
          </form>
        </div>
      </div>

      {/*  */}
      {/* useState with Array */}
      <div className="card">
        <h4>useState with Array</h4>
        <div className="card__content">
          <ul className="card__content__list">
            {items.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </div>
        <button className="card__btn" onClick={addItem}>
          Add a Number
        </button>
      </div>
    </>
  );
}

export default UseStateHook;
