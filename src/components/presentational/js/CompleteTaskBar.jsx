import React, { Component } from "react";
import "../css/CompleteTaskBar.css";

class CompleteTaskBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleCompleteButton();
  }

  render() {
    const className = (this.props.doneTasksCounter ? 
      "complete-task-bar" :
      "complete-task-bar complete-task-bar_hidden");

    return (
      <div className={className}>
        <button 
          className="complete-task-bar__clear-btn"
          onClick={this.handleClick}>
          Done ({this.props.doneTasksCounter}) - Click to hide done tasks
        </button>
      </div>
    );
  }
}

export default CompleteTaskBar;