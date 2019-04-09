import React from "react";
import "../css/CompleteTaskBar.css";

const CompleteTaskBar = ({ doneTasksCounter, onClick }) => {

  const className = doneTasksCounter ?
    "complete-task-bar" :
    "complete-task-bar complete-task-bar_hidden";

  return (
    <div className={className}>
      <button
        className="complete-task-bar__clear-btn"
        onClick={onClick}>
        Done ({doneTasksCounter}) - Click to hide done tasks
        </button>
    </div>
  );
}

export default CompleteTaskBar;