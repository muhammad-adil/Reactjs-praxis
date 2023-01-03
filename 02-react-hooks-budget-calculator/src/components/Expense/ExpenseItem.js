import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export const ExpenseItem = ({ expense, handleEditItem, handleDeleteItem }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">&euro; {amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="Edit button"
          onClick={() => handleEditItem(id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="Delete button"
          onClick={() => handleDeleteItem(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
