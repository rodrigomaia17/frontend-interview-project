
import React, { Component } from 'react';
import logo from './logo.png';
import AvailabilitiesLauncher from './components/AvailabilitiesWindowLauncher.jsx';
import ThemeSwitcher from './components/ThemeSwitcher.jsx';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CareCru</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and any of its imported files and save to reload.
        </p>
        <ThemeSwitcher>
          <AvailabilitiesLauncher />
        </ThemeSwitcher>
      </div>
    );
  }
}


export default App;
