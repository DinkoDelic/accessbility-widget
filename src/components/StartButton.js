import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const StartButton = (props) => {
  const [effect, setEffect] = useState(false);

  return (
    <button
      onClick={() => {
        setEffect(true);
        props.ToggleMenu(props.toggle ? false : true);
      }}
      onAnimationEnd={() => {
        setEffect(false);
      }}
      className={`${effect && 'animate-spin-once'} 
        fixed ${props.position}-4 left-3 p-0 z-1003 flex`}
    >
      <FontAwesomeIcon
        className={
          'text-blue-300 border-blue-300 bg-blue-900 rounded-full hover:text-white hover:bg-blue-500 transform-gpu transition ease-in-out duration-200'
        }
        icon={props.toggle ? faTimesCircle : faUniversalAccess}
        size={'3x'}
      />
    </button>
  );
};

export default StartButton;
