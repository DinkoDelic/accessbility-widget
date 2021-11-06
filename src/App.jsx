import React from 'react';
import './App.css';
import AccessibilityButton from './components/AccessibilityButton.jsx';
import ResetButton from './components/ResetButton';
import { options } from './data/options.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reset: false };

    this.resetAll=this.resetAll.bind(this);
  }
  resetAll(resetChange) {
    this.setState({reset: resetChange});
  }
  render() {
    const optionsArray = [];
    Object.keys(options).forEach(function (key) {
      optionsArray.push(options[key]);
    });
    return (
      <>
        <div className="button-wrapper">
          {optionsArray.map((item) => {
            return (
              <AccessibilityButton
                key={item.id}
                reset={this.state.reset}
                resetAll={this.resetAll}
                options={item.options}
                id={item.id}
                targetElement={item.targetElement}
                text={item.text}
              />
            );
          })}
          <ResetButton reset={this.state.reset} resetAll={this.resetAll} />
        </div>
      </>
    );
  }
}

export default App;
