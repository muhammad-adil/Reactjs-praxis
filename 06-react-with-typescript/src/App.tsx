import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(" ");

  return (
    <div className="App">
      <h1 className="heading">Taskify with Typescript</h1>
      <InputFeild todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
