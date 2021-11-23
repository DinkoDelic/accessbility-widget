import React from 'react';
import './App.css';
import OptionsList from './components/OptionsList';
import ResetButton from './components/ResetButton.js';
import StartButton from './components/StartButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reset: false, toggleMenu: false };

    this.ResetAll = this.ResetAll.bind(this);
    this.ToggleMenu = this.ToggleMenu.bind(this);
  }
  ResetAll(resetChange) {
    this.setState({ reset: resetChange });
  }
  ToggleMenu(toggle) {
    this.setState({ toggleMenu: toggle });
  }

  render() {
    return (
      <>
        <StartButton
          toggle={this.state.toggleMenu}
          ToggleMenu={this.ToggleMenu}
        />

        <div
          className={
            ' bg-gray-50 w-100 h-auto fixed top-16 left-16 p-3 rounded-3xl border-solid border-4 border-blue-300 z-20 font-flipdish ' +
            (this.state.toggleMenu
              ? 'transform-gpu scale-x-100 opacity-100  transition ease-out duration-500 '
              : 'transform-gpu -translate-x-96 transition ease-in duration-500')
          }
        >
          <OptionsList reset={this.state.reset} ResetAll={this.ResetAll} />
          <ResetButton reset={this.state.reset} ResetAll={this.ResetAll} />
        </div>
      </>
    );
  }
}

export default App;
