import React, { Component } from "react";
import '../css/Notes.css';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.handleNoteTextChange = this.handleNoteTextChange.bind(this);

  }

  handleNoteTextChange(e) {
    this.props.handleNoteTextChange(e.target.value);
  }

  render() {
    return (
      <form className="note-text-form">
      <label htmlFor="note-content">
        Notes
        <textarea 
          id="note-content"
          value={this.props.textNoteValue}
          className=""note-text-form__area
          onChange={this.handleNoteTextChange}/>
      </label>
      </form>
    );
  }
}

export default Notes;