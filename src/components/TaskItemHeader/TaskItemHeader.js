import React from "react";
import PropTypes from "prop-types";

const TaskItemHeader = ({
  itemContent,
  dateValue,
  checked,
  arrowOpenTaskBody,
  onHeaderClick,
  onCheckBoxChange,
  isBodyHidden,
  id
}) => {
  itemContent = itemContent.slice(0, 1).toUpperCase() + itemContent.slice(1);

  itemContent = isBodyHidden
    ? itemContent.length <= 45
      ? itemContent
      : `${itemContent.slice(0, 45)}...`
    : itemContent;

  const caretIconClassName = arrowOpenTaskBody
    ? "fas fa-caret-up task-list__caretup-icon"
    : "fas fa-caret-down task-list__caretup-icon";

  const content = checked ? (
    <del>
      {" "}
      <span className="task-list__text"> {itemContent} </span>{" "}
    </del>
  ) : (
    <span className="task-list__text"> {itemContent} </span>
  );

  return (
    <div className="task-list__item-header" onClick={onHeaderClick}>
      <i className="fas fa-bars task-list__bars-icon" />{" "}
      <input
        type="checkbox"
        name="task"
        className="task-list__checkbox"
        checked={checked}
        onChange={() => onCheckBoxChange(id)}
      />{" "}
      {content} <span className="task-list__date"> {dateValue} </span>{" "}
      <i className={caretIconClassName} />{" "}
    </div>
  );
};

TaskItemHeader.propTypes = {
  itemContent: PropTypes.string.isRequired,
  dateValue: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  isBodyHidden: PropTypes.bool.isRequired,
  arrowOpenTaskBody: PropTypes.bool.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onCheckBoxChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default TaskItemHeader;
