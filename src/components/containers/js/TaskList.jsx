import React from "react";
import TaskItem from './TaskItem';
import '../css/TaskList.css';

const TaskList = ({taskItems, onDeleteButtonClick, hideItem, onCheckBoxChange, onTaskItemClick, onTextNoteChange }) => {
  let items;

  if (taskItems.length) {
    items = taskItems.map(el => {
      return <TaskItem 
        key={el.id} 
        text={el.text} 
        id={el.id}
        isBodyHidden={el.isBodyHidden}
        textNoteValue={el.textNoteValue}
        arrowOpenTaskBody={el.arrowOpenTaskBody}
        taskItemChecked={el.taskItemChecked}
        onDeleteButtonClick={onDeleteButtonClick}
        hideItem={hideItem}
        onCheckBoxChange={onCheckBoxChange}
        onTaskItemClick={onTaskItemClick} 
        onTextNoteChange={onTextNoteChange}/>
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

export default TaskList;