import React from "react";
import PropTypes from "prop-types";
import "./AddTaskBar.css";

const AddTaskBar = ({ onTaskSubmit, onTaskChange, typedText }) => {
  const textInput = React.createRef();

  return (
    <form className="addtask-form" onSubmit={onTaskSubmit}>
      <span
        className="addtask-form__add-sign"
        onClick={() => textInput.current.focus()}
      >
        +
      </span>
      <label htmlFor="task">
        <input
          type="text"
          name="task"
          ref={textInput}
          className="addtask-form__input"
          maxLength="45"
          value={typedText}
          onChange={onTaskChange}
          placeholder="Type your task..."
        />
      </label>
      <input type="submit" className="addtask-form__submit-btn" value="add" />
    </form>
  );
};

AddTaskBar.propTypes = {
  onTaskSubmit: PropTypes.func.isRequired,
  onTaskChange: PropTypes.func.isRequired,
  typedText: PropTypes.string.isRequired
};

export default AddTaskBar;
