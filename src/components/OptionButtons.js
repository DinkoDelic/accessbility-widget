import { options } from '../data/options.js';
import AccessibilityButton from './AccessibilityButton.js';

const OptionButtons = (props) => {
  const optionsArray = [];
  Object.keys(options).forEach(function (key) {
    optionsArray.push(options[key]);
  });
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-center ">
      {optionsArray.map((item) => {
        return (
          <AccessibilityButton
            key={item.id}
            reset={props.reset}
            resetAll={props.resetAll}
            options={item.options}
            id={item.id}
            targetElement={item.targetElement}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default OptionButtons;
