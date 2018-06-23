import React, { Component } from 'react';
import styled from 'styled-components';
import EnfootLogo from '../Icons/enfoot';
import Naner from '../Icons/Naner';
import { Wobble } from '../Styles';

const LoaderWrapper = styled.div`
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledNaner = styled.div`
  width: 70px;
  position: relative;
  ${Wobble};
  animation-iteration-count: infinite;
  svg {
    width: 100%;
  }
  path {
    fill: ${props => props.theme.b300};
  }
`;

class Loader extends Component {
  render() { 
    return (
      <LoaderWrapper>
        <EnfootLogo />
        <StyledNaner><Naner /></StyledNaner>
      </LoaderWrapper>
    )
  }
}
 
export default Loader;