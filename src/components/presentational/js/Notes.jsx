import React, {Component} from "react";
import '../css/Notes.css';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this
      .handleChange
      .bind(this);

  }

  handleChange(e) {
    this
      .props
      .handleNoteTextChange(e.target.value);
  }

  render() {
    return (
      <form className="note-text-form">
        <label htmlFor="note-content">
          Notes
          <textarea
            id="note-content"
            value={this.props.textNoteValue}
            className="note-text-form__area"
            onChange={this.handleChange}/>
        </label>
      </form>
    );
  }
}

export default Notes;