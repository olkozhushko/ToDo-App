import React, {Component} from "react";
import '../css/AddTaskBar.css';

class AddTaskBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.handleTaskChange(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleTaskSubmit();
  }

  render() {

    return (
      <form className="addtask-form" onSubmit={this.handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="task"
            className="addtask-form__input"
            value={this.props.typedText}
            onChange={this.handleChange}
            placeholder="type your task..."/>
        </label>
      </form>
    );
  }
}

export default AddTaskBar;