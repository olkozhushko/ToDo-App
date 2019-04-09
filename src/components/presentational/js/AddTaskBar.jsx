import React, {Component} from "react";
import '../css/AddTaskBar.css';

class AddTaskBar extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.textInput.current.focus();
  }

  render() {

    return (
      <form className="addtask-form" onSubmit={this.props.onTaskSubmit}>
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
            onChange={this.props.onTaskChange}
            placeholder="Type your task..."/>
        </label>
      </form>
    );
  }
}

export default AddTaskBar;