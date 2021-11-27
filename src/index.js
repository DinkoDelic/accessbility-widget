import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/accessibility.css'
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('flipdish-accessibility-widget')
);

if (module.hot) {

  module.hot.accept();
  
  }

