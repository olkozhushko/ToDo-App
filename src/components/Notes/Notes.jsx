import React from "react";
import PropTypes from "prop-types";
import './Notes.css';

const Notes = ({textNoteValue, onChange, isBodyHidden, id}) => {

    //if task body hidden define class and add 
    //to form "className" to hide it as well.

    let addonClass = isBodyHidden ? 
      "note-form_hidden" : "";

    return (
      <form className={`note-form ${addonClass}`}>
        <label htmlFor="content" className="note-form__label">
          <span className="note-form__title">Notes</span>
          <textarea
            id="content"
            value={textNoteValue}
            className="note-form__area"
            onChange={(e) => {
              onChange(e.target, id)}}/>
        </label>
      </form>
    );
  }


Notes.propTypes = {
  textNoteValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isBodyHidden: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
}

export default Notes;