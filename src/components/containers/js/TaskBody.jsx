import React, {Component} from "react";
import '../css/TaskBody.css';
import Notes from '../../presentational/js/Notes';
import DueDateTab from '../../presentational/js/DueDateTab';
import PrioritySelectTab from '../../presentational/js/PrioritySelectTab';
import DeleteButton from '../../presentational/js/DeleteButton';

class TaskBody extends Component {
  render() {
    let {isBodyHidden, itemStateData, handleChange, handleDeleteButtonClick} = this.props;

    const hidden = (isBodyHidden ? 
      "task-body task-body_hidden" : "task-body");

    return (
      <div
        className={hidden}>

        <Notes 
          handleChange={handleChange} 
          textNoteValue={itemStateData.textNoteValue}
          isBodyHidden={isBodyHidden}/>

        <DueDateTab 
          handleChange={handleChange} 
          dateValue={itemStateData.dueDateValue}/>

        <PrioritySelectTab
          color={itemStateData.priorityColor}
          handleChange={handleChange}/>

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