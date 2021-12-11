import React from 'react';
import './App.css';
import Footer from './components/Footer';
import OptionsList from './components/OptionsList';
import ResetButton from './components/ResetButton.js';
import StartButton from './components/StartButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reset: false,
      toggleMenu: false,
      position: document.getElementById('flipdish-accessibility-widget').dataset.position ?? 'top'
    };

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
          position={this.state.position}
        />
        {/* width: 284px !important; height: 528px !important; */}
        <div
          className={
            ` bg-gray-50 w-auto md:w-284 h-auto md:h-528 fixed ${this.state.position}-16 md:${this.state.position}-24 left-0 md:left-10  pb-0 rounded-3xl  border-solid border-4 border-blue-300 z-1002 font-flipdish  ` +
            (this.state.toggleMenu
              ? 'transform-gpu scale-x-100 opacity-100  transition ease-out duration-700'
              : 'transform-gpu -translate-x-96 transition ease-in duration-500')
          }
        >
          <OptionsList reset={this.state.reset} ResetAll={this.ResetAll} />
          <ResetButton reset={this.state.reset} ResetAll={this.ResetAll} />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
