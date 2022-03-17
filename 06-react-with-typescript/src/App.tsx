import React from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="heading">Taskify with Typescript</h1>
      <InputFeild />
    </div>
  );
};

export default App;
