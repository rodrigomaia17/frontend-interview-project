import React from 'react';
import styled from 'styled-components';

const SizedDiv = styled.div`
  height: 350px;
  text-align: center
`

const CenterIcon = styled.div`
  position: relative;
  top: 50%;
`

export default () => <SizedDiv><CenterIcon> <i className="fa fa-spinner fa-spin fa-4x" > </i></CenterIcon></SizedDiv> ;