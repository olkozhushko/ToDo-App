import React, {Component} from "react";
import '../css/AddTaskBar.css';

class AddTaskBar extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.props.handleTaskChange(e.target.value);
  }

  handleClick() {
    this.textInput.current.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleTaskSubmit();
  }

  render() {

    return (
      <form className="addtask-form" onSubmit={this.handleSubmit}>
        <span 
          className="addtask-form__add-sign"
          onClick={this.handleClick}>+</span>
        <label htmlFor="task">
          <input
            type="text"
            name="task"
            ref={this.textInput}
            className="addtask-form__input"
            value={this.props.typedText}
            onChange={this.handleChange}
            placeholder="Type your task..."/>
        </label>
      </form>
    );
  }
}

export default AddTaskBar;