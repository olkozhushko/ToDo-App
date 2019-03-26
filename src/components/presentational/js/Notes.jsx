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
    //if task body hidden define and add class 
    //to form className to hide it as well.

    let addonClass = this.props.isBodyHidden ? 
      "note-form_hidden" : "";

    return (
      <form className={`note-form ${addonClass}`}>
        <label htmlFor="content" className="note-form__label">
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