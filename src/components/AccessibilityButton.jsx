import React, { useState } from 'react';

function AccessibilityButton(props) {
  // Share value of undefined turns of all the changes
  let values = [...props.options,'undefined'];
  const [index, setIndex] = useState(0);

  function handleChange() {
    // If on last index position, cycle back to start
    if (values.length - 1 === index) setIndex(0);
    else setIndex(index + 1);
    // Apply styling from an array of options
    props.onClick(values[index]);
  }

  return (
    <button className="accessibility-btn btn" onClick={handleChange}>
      {props.text}
    </button>
  );
}

export default AccessibilityButton;
