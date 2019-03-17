import React, {Component} from "react";
import "../css/DueDateTab.css";

class DueDateTab extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.handleChange();
  }

  render() {
    return (
      <div className="date-tab">
        <input 
          type="button" 
          value="Today" 
          className="date-tab__today-btn"/>
        <input 
          type="button" 
          value="Tomorrow" 
          className="date-tab__tomorrow-btn"/>
        <input
          type="date"
          value={this.props.dateValue}
          onChange={this.handleChange}
          className="date-tab__date-content"/>
      </div>
    );
  }
}

export default DueDateTab;