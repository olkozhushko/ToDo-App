import React from "react";
import PropTypes from "prop-types";
import "../css/PrioritySelectTab.css";

const PrioritySelectTab = ({ onChange, selectPriorityValue, id }) => {
  return (
    <div className="task-body__select-box">
      <span className="tab-text">Priority</span>
      <select
        name="select-priority"
        value={selectPriorityValue}
        className="task-body__tab"
        onChange={(e) => onChange(e.target, id)}>

        <option value="None">None</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}

PrioritySelectTab.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectPriorityValue: PropTypes.string.isRequired,
  id: PropTypes.object.isRequired
} 

export default PrioritySelectTab;