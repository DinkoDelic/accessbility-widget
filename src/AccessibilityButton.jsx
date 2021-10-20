import React from 'react';

function AccessibilityButton(props) {
  return (
    <button className="accessibility-btn btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default AccessibilityButton;
