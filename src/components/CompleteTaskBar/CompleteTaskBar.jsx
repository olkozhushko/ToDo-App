import React from "react";
import PropTypes from "prop-types";
import "../css/CompleteTaskBar.css";

const CompleteTaskBar = ({ tasks, onClick, hideCompletedTask}) => {

  let numDone = tasks.reduce((prev, curr) => {
    if(curr.taskItemChecked) {
      prev = prev + 1;
    }
    return prev;
  }, 0)

  const className = numDone ?
    "complete-task-bar" :
    "complete-task-bar complete-task-bar_hidden";

  return (
    <div className={className}>
      <button
        className="complete-task-bar__clear-btn"
        onClick={onClick}>
        Done ({numDone}) - Click to {hideCompletedTask ? "show completed" : "hide completed"}  tasks.
        </button>
    </div>
  );
}

CompleteTaskBar.propTypes = {
  tasks: PropTypes.array.isRequired, 
  onClick: PropTypes.func.isRequired,
  hideCompletedTask: PropTypes.bool.isRequired
}

export default CompleteTaskBar;