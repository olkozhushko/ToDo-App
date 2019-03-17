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
      <span className="date-box__tab">
        <input 
          type="button" 
          value="Today" 
          className="date-box__today-btn .date-box__btn_bottom-righ"/>
        <input 
          type="button" 
          value="Tomorrow" 
          className="date-box__tomorrow-btn .date-box__btn_bottom-right"/>
        <input
          type="date"
          value={this.props.dateValue}
          onChange={this.handleChange}
          className="date-box__content"/>
      </span>
    );
  }
}

export default DueDateTab;