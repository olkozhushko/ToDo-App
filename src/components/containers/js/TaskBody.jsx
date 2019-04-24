import React from "react";
import PropTypes from "prop-types";
import '../css/TaskBody.css';
import Notes from '../../presentational/js/Notes';
import DueDateTab from '../../presentational/js/DueDateTab';
import PrioritySelectTab from '../../presentational/js/PrioritySelectTab';
import DeleteButton from '../../presentational/js/DeleteButton';

const TaskBody = ({ textNoteValue, isBodyHidden, id, onDeleteButtonClick, onTextNoteChange, selectValue, onSelectTabChange, onDueDateChange, dueDateValue }) => {

  const hidden = (isBodyHidden ?
    "task-body task-body_hidden" : "task-body");

  return (
    <div
      className={hidden}>

      <Notes
        onChange={onTextNoteChange}
        textNoteValue={textNoteValue}
        isBodyHidden={isBodyHidden} 
        id={id}/>

      <DueDateTab
        onChange={onDueDateChange}
        dateValue={dueDateValue}
        id={id}/>

      <PrioritySelectTab
        selectPriorityValue={selectValue}
        onChange={onSelectTabChange} 
        id={id}/>

      <div className="task-body__btn-box">
        <DeleteButton
          id={id}
          onDeleteButtonClick={onDeleteButtonClick} />
      </div>
    </div>
  );
}


TaskBody.propTypes = {
  textNoteValue: PropTypes.string.isRequired,
  isBodyHidden: PropTypes.bool.isRequired,
  id: PropTypes.object.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onTextNoteChange: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
  onSelectTabChange: PropTypes.func.isRequired,
  onDueDateChange: PropTypes.func.isRequired,
  dueDateValue: PropTypes.string.isRequired
}

export default TaskBody;