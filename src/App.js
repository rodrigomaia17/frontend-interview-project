
import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import styled from 'styled-components';
import logo from './logo.png';
import './App.css';

const Launcher = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e8cff;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  right: 25px;
  bottom: 25px;
  border-radius: 50%;
  box-shadow: none;
  transition: box-shadow 0.2s ease-in-out;
`;

const Window = styled.div`
width: 370px;
  height: calc(100% - 120px);
  max-height: 590px;
  position: fixed;
  right: 25px;
  bottom: 100px;
  box-sizing: border-box;
  box-shadow: 0px 7px 40px 2px rgba(148, 149, 150, 0.3);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

@media (max-width: 450px) {
    width: 100%;
    height: 100%;
    max-height: 100%;
    right: 0px;
    bottom: 0px;
    border-radius: 0px;
  }
`;

const RoundedDiv = styled.div`
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`

const AppointmentsWindow = () => (
  <Window>
    <RoundedDiv className="card" >
      <header className="card-header">
        <p className="card-header-title">
          Appointment day:
        </p> 
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-times" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        <DayPickerInput />
      </div>
    </RoundedDiv>
  </Window>

)

class AppointmentsLauncher extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  };

  render() {
    return !this.state.isOpen ? <Launcher onClick={() => { this.setState({isOpen: true}); }} /> : <AppointmentsWindow />;
  }
}

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
        <AppointmentsLauncher />
      </div>
    );
  }
}

export default App;
