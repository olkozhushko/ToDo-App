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
      id: this.props.id,
      arrowOpenTaskBody: false
    }

    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleTaskBodyClick = this
      .handleTaskBodyClick
      .bind(this);
    this.handleHeaderClick = this
      .handleHeaderClick
      .bind(this);
  }

  handleTaskBodyClick(e) {
    if (e.target && e.target.tagName === "DIV") {
      this.setState(state => ({
        taskBodyHidden: !state.taskBodyHidden,
      }));
    }
  }

  handleHeaderClick(e) {
    if (e.target.tagName !== "INPUT") {
      this.setState(state => ({
        taskBodyHidden: !state.taskBodyHidden,
        arrowOpenTaskBody: !state.arrowOpenTaskBody
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
    const itemContent = (this.props.taskItemChecked
      ? <del>
          <span className="task-list__text">{this.props.text}</span>
        </del>
      : <span className="task-list__text">{this.props.text}</span>);
    
    console.log(hiddenItem);
    return (
      <li
        className={hiddenItem ? 
          "task-list__item task-list__item_hidden" : 
          "task-list__item"}
        onClick={this.handleTaskItemClick}>

        <TaskItemHeader
          handleCheckBoxChange={this.props.handleCheckBoxChange}
          handleHeaderClick={this.handleHeaderClick}
          id={this.state.id}
          checked={checked}
          itemContent={itemContent}
          arrowOpenTaskBody={this.state.arrowOpenTaskBody}/>

        <TaskBody
          itemStateData={this.state}
          handleTaskBodyClick={this.handleTaskBodyClick}
          handleChange={this.handleChange}
          handleDeleteButtonClick={this.props.handleDeleteButtonClick}/>
      </li>
    );
  }
}

class TaskItemHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this
      .handleChange
      .bind(this);

    this.handleHeaderClick = this
      .handleHeaderClick
      .bind(this);
  }

  handleHeaderClick(e) {
    this.props.handleHeaderClick(e);
  }

  handleChange(e) {
    this
      .props
      .handleCheckBoxChange(this.props.id);
  }

  render() {
    const caretIconClassName = (this.props.arrowOpenTaskBody ?
    "fas fa-caret-down task-list__caretup-icon" : 
    "fas fa-caret-up task-list__caretup-icon");

    return (
      <div className="task-list__item-header" onClick={this.handleHeaderClick}>

        <i className="fas fa-bars task-list__bars-icon"></i>

        <input
          type="checkbox"
          name="task"
          className="task-list__checkbox"
          checked={this.props.checked}
          onChange={this.handleChange}/> {this.props.itemContent}

        <i className={caretIconClassName}></i>
      </div>

    )
  }
}

export default TaskItem;