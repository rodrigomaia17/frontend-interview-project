import React from 'react';
import styled from 'styled-components';

const ColoredHeader = styled.header`
  background-color:  ${props => props.theme.headerColor};
`

export default ({onClose}) => (<ColoredHeader className="card-header">
  <p className="card-header-title">
    Appointments
  </p> 
  <a href="#" onClick={onClose} className="card-header-icon" aria-label="more options">
    <span className="icon">
      <i className="fas fa-times" aria-hidden="true"></i>
    </span>
  </a>
</ColoredHeader>)