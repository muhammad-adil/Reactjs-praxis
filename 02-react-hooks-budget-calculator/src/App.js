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
  const [alert, setAlert] = useState({ show: false });

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: "success", text: "item added" });
      setCharge("");
      setAmount("");
    } else {
      // handleAlert call
      handleAlert({
        type: "danger",
        text: "Charge can not be empty value and amount value has to be bigger than zero",
      });
    }
  };

  // Edit item
  const handleEditItem = (id) => {
    console.log("Edit item:", id);
  };
  // Delete item
  const handleDeleteItem = (id) => {
    console.log("Delete item:", id);
  };
  // Clear all Items
  const clearAllItems = () => {
    console.log("Cleared all Items");
    setExpenses([]);
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
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
        <ExpenseList
          expenses={expenses}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
          clearAllItems={clearAllItems}
        />
      </main>
      <h2>
        Total spending :{" "}
        <span className="total">
          &euro; {""}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h2>
    </>
  );
}

export default App;
