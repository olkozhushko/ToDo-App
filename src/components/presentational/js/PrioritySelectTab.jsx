import React from "react";
import "../css/PrioritySelectTab.css";

const PrioritySelectTab = ({ onChange, selectPriorityValue }) => {
  return (
    <div className="task-body__select-box">
      <span className="tab-text">Priority</span>
      <select
        name="select-priority"
        value={selectPriorityValue}
        className="task-body__tab"
        onChange={onChange}>
        <option value="None">None</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}

export default PrioritySelectTab;