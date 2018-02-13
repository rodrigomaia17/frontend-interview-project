import React, { Component } from 'react';
import styled from 'styled-components';
import AvailabilitiesWindow from './AvailabilitiesWindow.jsx';

const Launcher = styled.div`
  width: 60px;
  height: 60px;
  background-color:  ${props => props.theme.launcherColor};
  background-position: center; background-repeat: no-repeat;
  position: fixed;
  right: 25px;
  bottom: 25px;
  border-radius: 50%;
  box-shadow: none;
  transition: box-shadow 0.2s ease-in-out;
`;

export default class AppointmentsLauncher extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  };

  render() {
    return !this.state.isOpen ? <Launcher onClick={() => { this.setState({isOpen: true}); }} /> : <AvailabilitiesWindow onClose={() => {this.setState({ isOpen: false })}} />;
  }
}