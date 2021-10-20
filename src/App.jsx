import React from 'react';
import './App.css';
import AccessibilityButton from './AccessibilityButton.jsx';
import {increaseZoom, increaseLineHeight} from './accessiblity-functions.js';

class App extends React.Component {
  render() {
    return <div className="button-wrapper"> 
    <AccessibilityButton onClick={increaseZoom} text="Increase font"></AccessibilityButton>
    <AccessibilityButton onClick={increaseLineHeight} text="Increase line height"></AccessibilityButton>
    </div>
  }
}

export default App;
