import React from 'react';

function ResetButton(props) {
  function resetAll() {
    props.resetAll(true);
  }

  return (
    <div>
      {console.log(props.reset)}
      <button onClick={() => resetAll()} className="accessibility-btn btn">
        Reset All
      </button>
    </div>
  );
}
export default ResetButton;
