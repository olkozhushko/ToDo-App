import React from "react";
import TaskBody from "./TaskBody";
import PropTypes from "prop-types";
import "../css/TaskItem.css";

const TaskItem = ({
  onTaskItemClick,
  id,
  onDueDateChange,
  selectValue,
  taskItemChecked,
  hideItem,
  arrowOpenTaskBody,
  dueDateValue,
  isBodyHidden,
  onDeleteButtonClick,
  onTextNoteChange,
  textNoteValue,
  onSelectTabChange,
  text,
  onCheckBoxChange
}) => {
  let hiddenItem = taskItemChecked && hideItem;

  const checked = taskItemChecked;
  const itemContent = taskItemChecked ? (
    <del>
      <span className="task-list__text">{text}</span>
    </del>
  ) : (
    <span className="task-list__text">{text}</span>
  );

  console.log(dueDateValue);
  return (
    <li
      className={
        hiddenItem
          ? "task-list__item task-list__item_hidden"
          : "task-list__item"
      }
      data-priority={selectValue}
    >
      <TaskItemHeader
        onCheckBoxChange={onCheckBoxChange}
        onHeaderClick={e => onTaskItemClick(e.target, id)}
        id={id}
        checked={checked}
        itemContent={itemContent}
        arrowOpenTaskBody={arrowOpenTaskBody}
        dateValue={dueDateValue}
      />

      <TaskBody
        id={id}
        dueDateValue={dueDateValue}
        isBodyHidden={isBodyHidden}
        onDeleteButtonClick={onDeleteButtonClick}
        onTextNoteChange={onTextNoteChange}
        textNoteValue={textNoteValue}
        selectValue={selectValue}
        onSelectTabChange={onSelectTabChange}
        onDueDateChange={onDueDateChange}
      />
    </li>
  );
};

TaskItem.propTypes = {
  onTaskItemClick: PropTypes.func.isRequired,
  id: PropTypes.object.isRequired,
  onDueDateChange: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
  taskItemChecked: PropTypes.bool.isRequired,
  hideItem: PropTypes.bool.isRequired,
  arrowOpenTaskBody: PropTypes.bool.isRequired,
  dueDateValue: PropTypes.string.isRequired,
  isBodyHidden: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onTextNoteChange: PropTypes.func.isRequired,
  textNoteValue: PropTypes.string.isRequired,
  onSelectTabChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  onCheckBoxChange: PropTypes.func.isRequired
}

const TaskItemHeader = ({
  itemContent,
  dateValue,
  checked,
  arrowOpenTaskBody,
  onHeaderClick,
  onCheckBoxChange,
  id
}) => {
  const caretIconClassName = arrowOpenTaskBody
    ? "fas fa-caret-up task-list__caretup-icon"
    : "fas fa-caret-down task-list__caretup-icon";

  return (
    <div className="task-list__item-header" onClick={onHeaderClick}>
      <i className="fas fa-bars task-list__bars-icon" />
      <input
        type="checkbox"
        name="task"
        className="task-list__checkbox"
        checked={checked}
        onChange={() => onCheckBoxChange(id)}
      />

      {itemContent}
      <span className="task-list__date">{dateValue}</span>
      <i className={caretIconClassName} />
    </div>
  );
};

TaskItemHeader.propTypes = {
  itemContent: PropTypes.string.isRequired,
  dateValue: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  arrowOpenTaskBody: PropTypes.bool.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onCheckBoxChange: PropTypes.func.isRequired,
  id: PropTypes.object.isRequired
}

export default TaskItem;
