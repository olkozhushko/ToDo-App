import React, {Component} from "react";
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
    this
      .props
      .handleTaskBodyClick(e);
  }
  render() {
    let {itemStateData, handleChange, handleDeleteButtonClick} = this.props;

    const hidden = (itemStateData.taskBodyHidden ? 
      "task-body task-body_hidden" : "task-body");

    return (
      <div
        className={hidden}
        onClick={this.handleClick}>

        <Notes handleChange={handleChange} textNoteValue={itemStateData.textNoteValue}/>

        <div className="date-box">
          <DueDateTab handleChange={handleChange} dateValue={itemStateData.dueDateValue}/>
        </div>

        <div className="task-body__select-box">
          <PrioritySelectTab
            color={itemStateData.priorityColor}
            handleChange={handleChange}/>
        </div>

        <div className="task-body__btn-box">
          <DeleteButton
            id={itemStateData.id}
            handleDeleteButtonClick={handleDeleteButtonClick}/>
        </div>
      </div>
    );
  }
}

export default TaskBody;