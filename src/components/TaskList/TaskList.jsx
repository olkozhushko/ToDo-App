import React from "react";
import PropTypes from "prop-types";

import TaskItem from "../TaskItem/TaskItem";
import TaskBody from "../TaskBody/TaskBody";
import Notes from "../Notes/Notes";
import PrioritySelectTab from "../PrioritySelectTab/PrioritySelectTab";
import DueDateTab from "../DueDateTab/DueDateTab";
import DeleteButton from "../DeleteButton/DeleteButton";
import TaskItemHeader from "../TaskItemHeader/TaskItemHeader";

import "./TaskList.css";

const TaskList = ({
  taskItems,
  onDeleteButtonClick,
  hideItem,
  onCheckBoxChange,
  onTaskItemClick,
  onTextNoteChange,
  onSelectTabChange,
  onDueDateChange
}) => {
  let items;

  if (taskItems.length) {
    items = taskItems.map(el => {
      return (
        <TaskItem
          key={el.id}
          taskItemChecked={el.taskItemChecked}
          hideItem={hideItem}
          selectValue={el.selectValue}
        >
          <TaskItemHeader
            itemContent={el.text}
            dateValue={el.dueDateValue}
            checked={el.taskItemChecked}
            arrowOpenTaskBody={el.arrowOpenTaskBody}
            onHeaderClick={e => onTaskItemClick(e.target, el.id)}
            onCheckBoxChange={onCheckBoxChange}
            isBodyHidden={el.isBodyHidden}
            id={el.id}
          />

          <TaskBody isBodyHidden={el.isBodyHidden}>
            <Notes
              onChange={onTextNoteChange}
              textNoteValue={el.textNoteValue}
              isBodyHidden={el.isBodyHidden}
              id={el.id}
            />

            <DueDateTab
              onChange={onDueDateChange}
              dateValue={el.dueDateValue}
              id={el.id}
            />

            <PrioritySelectTab
              selectPriorityValue={el.selectValue}
              onChange={onSelectTabChange}
              id={el.id}
            />

            <div className="task-body__btn-box">
              <DeleteButton
                id={el.id}
                onDeleteButtonClick={onDeleteButtonClick}
              />
            </div>
          </TaskBody>
        </TaskItem>
      );
    });
  } else {
    items = [];
  }

  let isHidden = !taskItems.length;

  return (
    <ul className="task-list" hidden={isHidden}>
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
  onDueDateChange: PropTypes.func.isRequired
};

export default TaskList;
