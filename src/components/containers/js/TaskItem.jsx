import React from "react";
import TaskBody from "./TaskBody";
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

export default TaskItem;
