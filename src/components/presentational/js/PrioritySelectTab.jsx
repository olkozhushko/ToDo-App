import React, {Component} from "react";
import "../css/PrioritySelectTab.css";

class PrioritySelectTab extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    this.props.handleSelectChange();
  }

  render() {
    return (
      <div className="select-tab">
        <select
          name="select-priority"
          value={this.props.selectPriorityValue}
          onChange={this.handleSelectChange}>
          <option value="None">None</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    );
  }
}

export default PrioritySelectTab;