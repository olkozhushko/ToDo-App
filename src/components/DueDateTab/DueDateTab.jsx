import React from "react";
import PropTypes from "prop-types";
import "./DueDateTab.css";

const DueDateTab = ({ dateValue, onChange, id }) => {
  
  return (
    <div className="date-box">
      <span className="tab-text">Due Date</span>
      <input
        type="date"
        value={dateValue}
        onChange={(e) => {
          onChange(e.target, id)
        }}
        className="task-body__tab task-body__tab_date-padding" />
    </div>
  );
}

DueDateTab.propTypes = {
  dateValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default DueDateTab;