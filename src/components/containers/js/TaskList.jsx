import React, { Component } from "react";
import '../css/TaskList.css';

const TaskList = ({ taskItems }) => {
  let isHidden = taskItems.length ? true : false;
  let items;

  if (taskItems.length) {
    items = taskItems.map(el => {
      return <ListItem key={el.id} text={el.text} />
    });
  } else {
    items = [];
  }

  return (
    <ul 
      className="task-list" 
      hidden={isHidden}>
      {items}
    </ul>
  );
};

export default TaskList;