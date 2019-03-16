import React, { Component } from "react";
import "../css/CompleteTaskBar.css";

class CompleteTaskBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.props.handleCompleteTaskBarClick();
  }

  render() {
    return (
      <div className="complete-task-bar">
        <button 
          className="complete-task-bar__clear-btn"
          onClick={this.handleChange}>
          Done{this.props.doneTaskCounter}
        </button>
      </div>
    );
  }
}

export default CompleteTaskBar;