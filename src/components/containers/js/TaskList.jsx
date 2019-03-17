import React from "react";
import TaskItem from './TaskItem';
import '../css/TaskList.css';

const TaskList = ({ taskItems, handleDeleteButtonClick, hideItem, handleCheckBoxChange }) => {
  let items;

  if (taskItems.length) {
    items = taskItems.map(el => {
      return <TaskItem 
        key={el.id} 
        text={el.text} 
        id={el.id}
        taskItemChecked={el.taskItemChecked}
        handleDeleteButtonClick={handleDeleteButtonClick}
        hideItem={hideItem}
        handleCheckBoxChange={handleCheckBoxChange}
        />
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