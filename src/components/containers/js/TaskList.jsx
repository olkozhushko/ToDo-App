import React from "react";
import TaskItem from './TaskItem';
import '../css/TaskList.css';

const TaskList = ({ handleTaskBodyClick, taskItems, handleDeleteButtonClick, hideItem, handleCheckBoxChange, handleTaskItemClick }) => {
  let items;

  if (taskItems.length) {
    items = taskItems.map(el => {
      return <TaskItem 
        key={el.id} 
        text={el.text} 
        id={el.id}
        isBodyHidden={el.isBodyHidden}
        arrowOpenTaskBody={el.arrowOpenTaskBody}
        taskItemChecked={el.taskItemChecked}
        handleDeleteButtonClick={handleDeleteButtonClick}
        hideItem={hideItem}
        handleCheckBoxChange={handleCheckBoxChange}
        handleTaskItemClick={handleTaskItemClick} />
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