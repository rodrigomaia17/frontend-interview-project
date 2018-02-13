import React , { Component } from 'react';
import styled from 'styled-components';
import { fetchOfficeHours, fetchAppointments } from '../fetch/index.js';
import getAvailabilities from '../availabilities/getAvailabilities.js';
import AvailabilitiesWindowHeader from './AvailabilitiesWindowHeader.jsx';
import AvailabilitiesWindowDayPicker from './AvailabilitiesWindowDayPicker.jsx';
import AvailabilitiesWindowSlotList from './AvailabilitiesWindowSlotList.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';

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
  height: 100%;
  overflow: hidden;
`

const DivLeftAligned = styled.div`
  text-align: left
`

export default class AvailabilitiesWindow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedDay: undefined,
      isLoading: false,
      slots: []
    };
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  fetchAvailabilities(selectedDay) {
    Promise.all([fetchOfficeHours(selectedDay), fetchAppointments(selectedDay)])
           .then((returnValues) => {
             const officeHours = returnValues[0];
             const appointments = returnValues[1];
             const availableIntervals = getAvailabilities(officeHours,appointments);
             this.setState({slots: availableIntervals, isLoading: false})
           });
  }

  handleDayChange(selectedDay) {
    this.setState({selectedDay, isLoading: true}, () => {
      this.fetchAvailabilities(selectedDay)
    });
  }

  render() {
    return <Window>
      <RoundedDiv className="card" >
        <AvailabilitiesWindowHeader onClose={this.props.onClose} />
        <DivLeftAligned className="card-content">
          <AvailabilitiesWindowDayPicker selectedDay={this.state.selectedDay} handleDayChange={this.handleDayChange} />
          { this.state.selectedDay &&
            (!this.state.isLoading ?
             <AvailabilitiesWindowSlotList slots={this.state.slots} />
            :
             <LoadingSpinner />)
          }
        </DivLeftAligned>
      </RoundedDiv>
    </Window>
  }
} 