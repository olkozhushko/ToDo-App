import React from "react";
import PropTypes from "prop-types";
import "./ClearStoryBtn.css";

const ClearStoryBtn = ({onClick}) => {
  
  return (
    <div className="clean-btn-container">
      <button 
        type="button" 
        className="clean-btn"
        onClick={onClick}>
        <i className="fas fa-trash-alt clean-btn__icon"></i>
      </button>
    </div>
  )
}

ClearStoryBtn.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ClearStoryBtn;