import React from "react";
import PropTypes from "prop-types";
import "./TaskItem.css";

const TaskItem = ({
  selectValue,
  taskItemChecked,
  hideItem,
  children
}) => {
  let hiddenItem = taskItemChecked && hideItem;

  return (
    <li
      className={
        hiddenItem
          ? "task-list__item task-list__item_hidden"
          : "task-list__item"
      }
      data-priority={selectValue}
    >
      {children}
    </li>
  );
};

TaskItem.propTypes = {
  selectValue: PropTypes.string.isRequired,
  hideItem: PropTypes.bool.isRequired,
  taskItemChecked: PropTypes.bool.isRequired
}



export default TaskItem;
