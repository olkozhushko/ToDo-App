import React, { Component } from "react";
import '../css/TaskBody.css';
import Notes from '../../presentational/js/Notes';
import DueDateTab from '../../presentational/js/DueDateTab';
import PrioritySelectTab from '../../presentational/js/PrioritySelectTab';
import DeleteButton from '../../presentational/js/DeleteButton';

class TaskBody extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this
      .handleClick
      .bind(this);
  }

  handleClick(e) {
    this.props.handleTaskBodyClick(e);
  }
  render() {

    let {itemStateData, handleChange, handleDeleteButtonClick} = this.props;

    return (
      <div
        className="task-body"
        hidden={itemStateData.taskBodyHidden}
        onClick={this.handleClick}>
        <Notes handleChange={handleChange} textNoteValue={itemStateData.textNoteValue}/>
        <DueDateTab handleChange={handleChange} dateValue={itemStateData.dueDateValue}/>
        <PrioritySelectTab
          color={itemStateData.priorityColor}
          handleChange={handleChange}/>
        <DeleteButton
          id={itemStateData.id}
          handleDeleteButtonClick={handleDeleteButtonClick}/>
      </div>
    );
  }
}

export default TaskBody;