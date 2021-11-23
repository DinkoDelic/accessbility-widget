import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
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
        fixed top-2 left-6 p-0 z-30 rounded-full border-2 border-blue-300 bg-gray-700 hover:bg-blue-500 group`}
    >
      <FontAwesomeIcon
        className={
          'text-blue-300 group-hover:text-white transform-gpu transition ease-in-out duration-200'
        }
        icon={faUniversalAccess}
        size="3x"
      />
    </button>
  );
};

export default StartButton;
