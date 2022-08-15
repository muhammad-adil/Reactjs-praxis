import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import { ExpenseList } from "./components/Expense/ExpenseList";
import { ExpenseForm } from "./components/Expense/ExpenseForm";
import { Alert } from "./components/Alert";

const initialExpenses = [
  {
    id: uuidv4(),
    charge: "rent",
    amount: 270,
  },
  {
    id: uuidv4(),
    charge: "gas",
    amount: 30,
  },
  {
    id: uuidv4(),
    charge: "gym",
    amount: 10,
  },
];
// console.log(initialExpenses);
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  console.log("1", expenses, setExpenses);

  return (
    <>
      <div className="App">
        <h1>Hello React</h1>
        <Alert />
        <ExpenseForm />
        <ExpenseList />
      </div>
    </>
  );
}

export default App;
