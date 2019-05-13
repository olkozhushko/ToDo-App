import React from "react";
import PropTypes from "prop-types";
import './TaskBody.css';

const TaskBody = ({ children, isBodyHidden }) => {

  const hidden = (isBodyHidden ?
    "task-body task-body_hidden" : "task-body");

  return (
    <div className={hidden}>
      {children}
    </div>
  );
}


TaskBody.propTypes = {
  isBodyHidden: PropTypes.bool.isRequired,
}

export default TaskBody;