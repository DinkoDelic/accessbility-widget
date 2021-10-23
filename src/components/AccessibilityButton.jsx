import React, { useState } from 'react';
import AccessibilityOptions from '../AccessibilityOptions';

function AccessibilityButton(props) {
  // Share value of undefined turns of all the changes
  let values = [...props.options, null];
  const [index, setIndex] = useState(0);

  function handleChange() {
    // If on last index position, cycle back to start
    if (values.length - 1 === index) {
      setIndex(0);
    
    } else {
      setIndex(index + 1);
    }

    // Apply styling from an array of options
    AccessibilityOptions.changeStyling(values.at(index-1), values[index],props.targetElement);
  }

  return (
    <button className="accessibility-btn btn" onClick={handleChange}>
      {props.text}
    </button>
  );
}

export default AccessibilityButton;
