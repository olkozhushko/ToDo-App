import React, { Component } from "react";
import TaskBody from "./TaskBody";
import '../css/TaskItem.css';

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteButtonClassName: "",
      dueDateValue: this.defineInitialDate(),
      indicatedDate: "",
      selectValue: "",
      id: this.props.id
    }

    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleHeaderClick = this
      .handleHeaderClick
      .bind(this);
  }

  handleHeaderClick(e) {
    if (e.target.tagName !== "INPUT") {
      this.props.onTaskItemClick(this.props.id);
    }
  }

  handleChange(e) {
    switch (e.target.tagName) {
      case "SELECT":
        this.setState({ selectValue: e.target.value });
        break;
      case "INPUT":
        this.setState({
          dueDateValue: e.target.value,
          indicatedDate: e.target.value
        });
        break;
      default:
        this.setState({ dueDateValue: "", selectValue: "", textNoteValue: "" });
    }
  }

  //define initial date to display it on todo item

  defineInitialDate() {
    let date = new Date();

    let todayYear = date.getFullYear();
    let todayMonth = (date.getMonth() + 1) < 10 ?
      `0${(date.getMonth() + 1)}` : (date.getMonth() + 1);
    let todayDay = (date.getDate()) < 10 ?
      `0${(date.getDate())}` : (date.getDate());

    let initialDate = `${todayYear}-${todayMonth}-${todayDay}`;

    return initialDate;
  }

  render() {
    let hiddenItem = this.props.taskItemChecked && this.props.hideItem;

    const checked = this.props.taskItemChecked;
    const itemContent = (this.props.taskItemChecked
      ? <del>
        <span className="task-list__text">{this.props.text}</span>
      </del>
      : <span className="task-list__text">{this.props.text}</span>);

    return (
      <li
        className={hiddenItem ?
          "task-list__item task-list__item_hidden" :
          "task-list__item"}
        onClick={this.handleTaskItemClick}
        data-priority={this.state.selectValue}>

        <TaskItemHeader
          onCheckBoxChange={this.props.onCheckBoxChange}
          onHeaderClick={this.handleHeaderClick}
          id={this.state.id}
          checked={checked}
          itemContent={itemContent}
          arrowOpenTaskBody={this.props.arrowOpenTaskBody}
          dateValue={this.state.indicatedDate} />

        <TaskBody
          itemStateData={this.state}
          isBodyHidden={this.props.isBodyHidden}
          onTaskBodyClick={this.handleTaskBodyClick}
          onChange={this.handleChange}
          onDeleteButtonClick={this.props.onDeleteButtonClick} 
          onTextNoteChange={this.props.onTextNoteChange}
          textNoteValue={this.props.textNoteValue}/>
      </li>
    );
  }
}

const TaskItemHeader = ({ itemContent, dateValue, checked, arrowOpenTaskBody, onHeaderClick, onCheckBoxChange, id }) => {

  const caretIconClassName = arrowOpenTaskBody ?
    "fas fa-caret-up task-list__caretup-icon" :
    "fas fa-caret-down task-list__caretup-icon";

  return (
    <div className="task-list__item-header" onClick={onHeaderClick}>

      <i className="fas fa-bars task-list__bars-icon"></i>
      <input
        type="checkbox"
        name="task"
        className="task-list__checkbox"
        checked={checked}
        onChange={() => onCheckBoxChange(id)} />

      {itemContent}
      <span className="task-list__date">{dateValue}</span>
      <i className={caretIconClassName}></i>

    </div>

  )
}

export default TaskItem;