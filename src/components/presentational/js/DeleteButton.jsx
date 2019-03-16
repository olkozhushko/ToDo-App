import React, {Component} from "react";
import '../css/DeleteButton.css';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteButtonClick = this
      .handleDeleteButtonClick
      .bind(this);
  }

  handleDeleteButtonClick(e) {
    this
      .props
      .handleDeleteButtonClick();
  }

  render() {
    return (
      <button 
        className="delete-btn" 
        onClick={this.handleDeleteButtonClick}>
        Delete
      </button>
    );
  }
}

export default DeleteButton;