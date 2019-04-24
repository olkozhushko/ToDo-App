import React from "react";
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

export default CompleteTaskBar;