import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

function ResetButton(props) {
  function ResetAll() {
    props.ResetAll(true);
  }

  return (
    <div className="bg-blue-300 content-center flex mt-2 rounded-md">
      <button className="m-auto h-full w-full" onClick={() => ResetAll()}>
        Reset All <FontAwesomeIcon icon={faTimes} size='1x' />
      </button>
    </div>
  );
}
export default ResetButton;
