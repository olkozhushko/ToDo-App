import React from "react";
import "../css/DueDateTab.css";

const DueDateTab = ({ dateValue, onChange }) => {
  return (
    <div className="date-box">
      <span className="tab-text">Due Date</span>
      <input
        type="date"
        value={dateValue}
        onChange={onChange}
        className="task-body__tab task-body__tab_date-padding" />
    </div>
  );
}

export default DueDateTab;