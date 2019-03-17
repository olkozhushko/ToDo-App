import React, {Component} from "react";
import '../css/DeleteButton.css';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this
      .handleClick
      .bind(this);
  }

  handleClick(e) {
    this.props.handleDeleteButtonClick(this.props.id);
  }

  render() {
    return (
      <button 
        className="delete-btn" 
        onClick={this.handleClick}>
        Delete
      </button>
    );
  }
}

export default DeleteButton;