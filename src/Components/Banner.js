import React, { Component } from 'react';
import styled from 'styled-components';
import { SlideDownIn, Badge } from '../Styles';

const SRC = '/assets/banner.png';

const StyledSlat = styled.div`
  min-height: 400px;
  width: 100%;
  background-size: contain;
  background-position: center;
  ${SlideDownIn}
  
`;

export default class Banner extends Component {
  render() {
    return (
      <StyledSlat style={{ backgroundImage: `url(${SRC})`}}>
        <Badge>KITH</Badge>
      </StyledSlat>
    );
  }
}