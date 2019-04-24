import React from "react";
import PropTypes from "prop-types";
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

DeleteButton.propTypes = {
  id: PropTypes.object.isRequired, 
  onDeleteButtonClick: Proptypes.func.isRequired
}

export default DeleteButton;