import React, {Component} from "react";
import "../css/DueDateTab.css";

class DueDateTab extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e.target);
  }

  render() {
    return (
      <div className="date-box">
        <span className="tab-text">Due Date</span>
        <input
          type="date"
          value={this.props.dateValue}
          onChange={this.handleChange}
          className="task-body__tab task-body__tab_date-padding"/>
      </div>
    );
  }
}

export default DueDateTab;