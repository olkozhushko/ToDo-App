import React from "react";
import '../css/TaskBody.css';
import Notes from '../../presentational/js/Notes';
import DueDateTab from '../../presentational/js/DueDateTab';
import PrioritySelectTab from '../../presentational/js/PrioritySelectTab';
import DeleteButton from '../../presentational/js/DeleteButton';

const TaskBody = ({ isBodyHidden, itemStateData, onChange, onDeleteButtonClick }) => {

  const hidden = (isBodyHidden ?
    "task-body task-body_hidden" : "task-body");

  return (
    <div
      className={hidden}>

      <Notes
        onChange={onChange}
        textNoteValue={itemStateData.textNoteValue}
        isBodyHidden={isBodyHidden} />

      <DueDateTab
        onChange={onChange}
        dateValue={itemStateData.dueDateValue} />

      <PrioritySelectTab
        color={itemStateData.priorityColor}
        onChange={onChange} />

      <div className="task-body__btn-box">
        <DeleteButton
          id={itemStateData.id}
          onDeleteButtonClick={onDeleteButtonClick} />
      </div>
    </div>
  );
}

export default TaskBody;