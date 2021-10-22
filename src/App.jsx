import React from 'react';
import './App.css';
import AccessibilityButton from './components/AccessibilityButton.jsx';
import AccessibilityOptions from './AccessibilityOptions';

class App extends React.Component {
  render() {
    return (
      <div className="button-wrapper">
        <AccessibilityButton
          onClick={AccessibilityOptions.increaseZoom}
          options={['1.2','1.4']}
          text="Increase font"
        ></AccessibilityButton>
        <AccessibilityButton
          onClick={AccessibilityOptions.increaseLineHeight}
          options={['2','2.5','3']}
          text="Increase line height"
        ></AccessibilityButton>
        <AccessibilityButton
          onClick={AccessibilityOptions.increaseWordSpacing}
          options={['2px','4px','6px']}
          text="Increase word spacing"
        ></AccessibilityButton>
          <AccessibilityButton
          onClick={AccessibilityOptions.changeTextAlign}
          options={['center','left','right']}
          text="Change text align"
        ></AccessibilityButton>
         <AccessibilityButton
          onClick={AccessibilityOptions.changeToDyslexiaFriendlyFont}
          options={['Arial']}
          text="Dyslexia friendly font"
        ></AccessibilityButton>
      </div>
    );
  }
}

export default App;
