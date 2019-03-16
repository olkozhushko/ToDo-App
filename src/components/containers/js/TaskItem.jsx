import React, {Component} from "react";
import '../css/TaskItem.css';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskItemChecked: false,
      deleteButtonClassName: "",
      textNoteValue: "",
      DueDataValue: "",
      taskBodyHidden: false,
      priorityColor: ""
    }

    this.handleTextNoteChange = this.handleTextNoteChange.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
    this.handleSelectsTabChange = this.handleSelectsTabChange.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
  }

  render() {
    return (
      <li className="task-item">
        <TaskItemCheckBox
          handleCheckBoxChange={this.props.handleTaskItemCheckBoxChange}/> {this.props.text}
        <TaskBody 
          itemStateData={this.state} 
          handleTextNoteChange={this.handleTextNoteChange}
          handleDueDateChange={this.handleDueDateChange}
          handleSelectsTabChange={this.handleSelectsTabChange}
          handleDeleteButtonClick={this.handleDeleteButtonClick}/>
      </li>
    );
  }
}

class TaskItemCheckBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(e) {
    this
      .props
      .handleCheckBoxChange();
  }

  render() {
    return (<input
      type="checkbox"
      name="task"
      className="task-item__checkbox"
      onChange={this.handleChange}/>)
  }
}

export default TaskItem;