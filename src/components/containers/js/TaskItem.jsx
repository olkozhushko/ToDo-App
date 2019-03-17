import React, {Component} from "react";
import TaskBody from "./TaskBody";
import '../css/TaskItem.css';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteButtonClassName: "",
      textNoteValue: "",
      dueDateValue: "",
      taskBodyHidden: true,
      priorityColor: "",
      selectValue: "",
      id: this.props.id
    }

    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleTaskBodyClick = this
      .handleTaskBodyClick
      .bind(this);
    this.handleTaskItemClick = this
      .handleTaskItemClick
      .bind(this);
  }

  handleTaskBodyClick(e) {
    console.log(e.target);
    if (e.target && e.target.tagName === "DIV") {
      this.setState(state => ({
        taskBodyHidden: !state.taskBodyHidden
      }));
    }
  }

  handleTaskItemClick(e) {
    if (e.target.tagName === "LI") {
      this.setState(state => ({
        taskBodyHidden: !state.taskBodyHidden
      }));
    }
  }

  handleChange(target) {
    switch (target.tagName) {
      case "TEXTAREA":
        this.setState({textNoteValue: target.value});
        break;
      case "SELECT":
        this.setState({selectValue: target.value});
        break;
      case "INPUT":
        this.setState({dueDateValue: target.value});
        break;
      default:
        this.setState({dueDateValue: "", selectValue: "", textNoteValue: ""});
    }
  }

  render() {
    let hiddenItem = this.props.taskItemChecked && this.props.hideItem;

    const checked = this.props.taskItemChecked;
    console.log(checked);
    return (
      <li
        className="task-item"
        hidden={hiddenItem}
        onClick={this.handleTaskItemClick}>

        <TaskItemCheckBox
          checked={this.props.taskItemChecked}
          id={this.state.id}
          handleCheckBoxChange={this.props.handleCheckBoxChange}/> {this.props.taskItemChecked
          ? <del>{this.props.text}</del>
          : this.props.text}
        <TaskBody
          itemStateData={this.state}
          handleTaskBodyClick={this.handleTaskBodyClick}
          handleChange={this.handleChange}
          handleDeleteButtonClick={this.props.handleDeleteButtonClick}/>
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
      .handleCheckBoxChange(this.props.id);
  }

  render() {
    return (<input
      type="checkbox"
      name="task"
      className="task-item__checkbox"
      checked={this.props.checked}
      onChange={this.handleChange}/>)
  }
}

export default TaskItem;