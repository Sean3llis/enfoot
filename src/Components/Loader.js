import React, { Component } from 'react';
import styled from 'styled-components';
import EnfootLogo from '../Icons/enfoot';

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

class Loader extends Component {
  render() { 
    return (
      <LoaderWrapper>
        <EnfootLogo />
      </LoaderWrapper>
    )
  }
}
 
export default Loader;