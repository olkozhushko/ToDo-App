import React, {Component} from "react";
import './AddTaskBar.css';

class AddTaskBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.handleTaskChange(e.target.value);
  }

  render() {

    return (
      <form className="addtask-form">
        <label htmlFor="">
          <input
            type="text"
            name="task"
            className="addtask-form__input"
            value={this.props.typedText}
            onChange={this.handleInputChange}
            placeholder="type your task..."/>
        </label>
      </form>
    );
  }
}

export default AddTaskBar;