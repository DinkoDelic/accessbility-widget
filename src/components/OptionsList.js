import { options } from '../data/options.js';
import AccessibilityButton from './AccessibilityButton.js';

const OptionsList = (props) => {
  const optionsArray = [];
  Object.keys(options).forEach(function (key) {
    optionsArray.push(options[key]);
  });
  return (
    <div className={"grid grid-cols-1 md:grid-cols-2  gap-x-2 gap-y-2 text-center m-3"}>
      {optionsArray.map((item) => {
        return (
          <AccessibilityButton
            key={item.id}
            reset={props.reset}
            ResetAll={props.ResetAll}
            options={item.options}
            optionsDescription={item.optionsDescription}
            id={item.id}
            targetElement={item.targetElement}
            text={item.text}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};

export default OptionsList;
