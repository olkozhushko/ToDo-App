import React from "react";
import '../css/DeleteButton.css';

const DeleteButton = ({ id, onDeleteButtonClick }) => {

  return (
    <button
      className="delete-btn"
      onClick={() => onDeleteButtonClick(id)}>
      Delete
      </button>
  );
}

export default DeleteButton;