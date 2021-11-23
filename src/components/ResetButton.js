import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons'

function ResetButton(props) {
  function ResetAll() {
    props.ResetAll(true);
  }

  return (
    <div className="bg-blue-200 text-blue-900 content-center flex m-3 rounded-3xl transition-all duration-300 hover:ring-2 hover:rounded-lg hover:bg-white hover:text-blue-900">
      <button className="m-auto h-full w-full text-md font-bold" onClick={() => ResetAll()}>
        Reset All <FontAwesomeIcon icon={faTimesCircle} size='sm' />
      </button>
    </div>
  );
}
export default ResetButton;
