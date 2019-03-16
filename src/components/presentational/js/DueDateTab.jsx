import React, { Components } from "react";
import "../css/DueDateTab.css";

class DueDateTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="date-tab">
        <input 
          type="Button" 
          value="Today"
          className="date-tab__today-btn"/>
        <input 
          type="Button"
          value="Tomorrow"
          className="date-tab__tomorrow-btn"/>
        <input 
          type="date"
          value={this.props.dateValue}
          className="date-tab__date-content"/>
      </div>
    );
  }
}

export default DueDateTab;