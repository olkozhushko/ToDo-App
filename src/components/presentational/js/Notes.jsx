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
      .handleChange(e.target);
  }

  render() {
    return (
      <form className="note-form">
        <label htmlFor="content">
          <span className="note-form__title">Notes</span>
          <textarea
            id="content"
            value={this.props.textNoteValue}
            className="note-form__area"
            onChange={this.handleChange}/>
        </label>
      </form>
    );
  }
}

export default Notes;