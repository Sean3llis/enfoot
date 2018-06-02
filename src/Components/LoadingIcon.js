import React, { Component } from 'react';
import styled from 'styled-components';
import { pulse } from '../Styles';

const StyledIcon = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
  margin: auto;
  border: 1px solid ${props => props.theme.b300};
  animation: ${pulse} 1s infinite;
`;

class LoadingIcon extends Component {
  state = {}
  render() { 
    return <StyledIcon />
  }
}
 
export default LoadingIcon;