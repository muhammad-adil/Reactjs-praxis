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
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  // console.log("1", expenses, setExpenses);

  const handleCharge = (e) => {
    console.log(`Charge : ${e.target.value}`);
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    console.log(`Amount : ${e.target.value}`);
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h2>
        Total spending :{" "}
        <span className="total">
          &euro; {""}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h2>
    </>
  );
}

export default App;
