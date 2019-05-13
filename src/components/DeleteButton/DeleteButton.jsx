import React from "react";
import PropTypes from "prop-types";
import './DeleteButton.css';

const DeleteButton = ({ id, onDeleteButtonClick }) => {
  
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