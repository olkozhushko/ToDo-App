import React, {Components} from "react";
import './TaskBody.css';
import Notes from '../../presentational/js/Nodes';
import DueDateTab from '../../presentational/js/DueDateTab';
import PrioritySelectTab from '../../presentational/js/PrioritySelectTab';
import DeleteButton from '../../presentational/js/DeleteButton';

const TaskBody = ({handleTextNoteChange, handleDueDateChange, handleSelectTabChange, handleDeleteButtonClick,
textNoteValue, DueDataValue, priorityColor}) => (
  <div className="task-body">
    <Notes 
      handleTextNoteChange={handleTextNoteChange}
      textNoteValue={textNoteValue}/>
    <DueDateTab 
      handleDueDateChange={handleDueDateChange}
      DueDataValue={DueDataValue}/>
    <PrioritySelectTab 
      color={priorityColor}
      handleSelectTabChange={handleSelectTabChange}/>
    <DeleteButton 
      handleDeleteButtonClick={handleDeleteButtonClick}/>
  </div>
);

export default TaskBody;