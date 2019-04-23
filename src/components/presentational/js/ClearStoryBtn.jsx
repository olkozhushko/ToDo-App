import React from "react";
import "../css/ClearStoryBtn.css";

const ClearStoryBtn = ({onClick}) => {
  
  return (
    <div className="clean-btn-container">
      <button 
        type="button" 
        className="clean-btn"
        onClick={onClick}>
        <i class="fas fa-trash-alt clean-btn__icon"></i>
      </button>
    </div>
  )
}

export default ClearStoryBtn;