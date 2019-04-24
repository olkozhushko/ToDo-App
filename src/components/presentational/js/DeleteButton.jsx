import React from "react";
import PropTypes from "prop-types";
import '../css/DeleteButton.css';

const DeleteButton = ({ id, onDeleteButtonClick }) => {
  
  console.log(typeof id);
  return (
    <button
      className="delete-btn"
      onClick={() => onDeleteButtonClick(id)}>
      Delete
      </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired, 
  onDeleteButtonClick: PropTypes.func.isRequired
}

export default DeleteButton;