import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
//
import { ExpenseList } from "./components/Expense/ExpenseList";
import { ExpenseForm } from "./components/Expense/ExpenseForm";
import { Alert } from "./components/Alert";
//
//
// let initialExpenses = undefined;
// try {
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
// } catch (err) {
//   console.log("Error: ", err.message);
// }

//
// const initialExpenses = [
//   {
//     id: uuidv4(),
//     charge: "rent",
//     amount: 270,
//   },
//   {
//     id: uuidv4(),
//     charge: "gas",
//     amount: 30,
//   },
//   {
//     id: uuidv4(),
//     charge: "gym",
//     amount: 10,
//   },
// ];
// console.log(initialExpenses);
// ------------------------------------------------------------------
//
function App() {
  //
  //
  //
  //
  // let initialExpenses = undefined;
  // const value = undefined;

  // try {
  //   initialExpenses = localStorage.getItem("expenses") ? JSON.parse(value) : []; // JSON.parse(localStorage.getItem("expenses"))
  //   const result = JSON.parse(value);
  //   console.log(result);
  // } catch (err) {
  //   // 👇️ This runs
  //   console.log("Error: ", err.message);
  // }
  //
  //
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  //
  //
  useEffect(() => {
    console.log("UseEffect called");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  //
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    let amount = e.target.value;
    // setAmount(e.target.value);
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
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
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "item edited" });
      } else {
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
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
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  // Delete item
  const handleDeleteItem = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  // Clear all Items
  const clearAllItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All items cleared" });
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      {/* <Alert /> */}
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
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
