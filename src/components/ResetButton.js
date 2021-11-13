import React from 'react';

function ResetButton(props) {
  function resetAll() {
    props.resetAll(true);
  }

  return (
    <div className="bg-blue-300 content-center flex mt-2">
      {console.log(props.reset)}
      <button className="m-auto" onClick={() => resetAll()}>
        Reset All
      </button>
    </div>
  );
}
export default ResetButton;
