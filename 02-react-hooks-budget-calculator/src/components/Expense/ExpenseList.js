import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
export const ExpenseList = ({
  expenses,
  handleEditItem,
  handleDeleteItem,
  clearAllItems,
}) => {
  return (
    <>
      <ul className="list">
        <li></li>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleEditItem={handleEditItem}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn btn-" onClick={clearAllItems}>
          Clear Expenses <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};
