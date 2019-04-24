import React from "react";
import TaskItem from './TaskItem';
import PropTypes from "prop-types";
import '../css/TaskList.css';

const TaskList = ({taskItems, onDeleteButtonClick, hideItem, onCheckBoxChange, onTaskItemClick, onTextNoteChange, onSelectTabChange, onDueDateChange}) => {
  let items;

  if (taskItems.length) {
    items = taskItems.map(el => {
      return <TaskItem 
        key={el.id} 
        text={el.text} 
        id={el.id}
        isBodyHidden={el.isBodyHidden}
        textNoteValue={el.textNoteValue}
        selectValue={el.selectValue}
        dueDateValue={el.dueDateValue}
        arrowOpenTaskBody={el.arrowOpenTaskBody}
        taskItemChecked={el.taskItemChecked}
        onDeleteButtonClick={onDeleteButtonClick}
        hideItem={hideItem}
        onCheckBoxChange={onCheckBoxChange}
        onTaskItemClick={onTaskItemClick} 
        onTextNoteChange={onTextNoteChange}
        onSelectTabChange={onSelectTabChange}
        onDueDateChange={onDueDateChange}/>
    });
  } else {
    items = [];
  }

  let isHidden = !taskItems.length;
  
  return (
    <ul 
      className="task-list" 
      hidden={isHidden}>
      {items}
    </ul>
  );
};

TaskList.propTypes = {
  taskItems: PropTypes.array.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  hideItem: PropTypes.bool.isRequired,
  onCheckBoxChange: PropTypes.func.isRequired,
  onTaskItemClick: PropTypes.func.isRequired,
  onTextNoteChange: PropTypes.func.isRequired,
  onSelectTabChange: PropTypes.func.isRequired,
  onDueDateChange: PropTypes.func.isRequired,
}

export default TaskList;