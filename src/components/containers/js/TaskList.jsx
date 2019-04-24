import React from "react";
import TaskItem from './TaskItem';
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

export default TaskList;