import React, { Component } from 'react';
import styled from 'styled-components';
import { Slat, float } from '../Styles';

const StyledSlat = styled(Slat)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  flex: 1;
  position: relative;
  .fourohfour {
    position: relative;
    width: 100%;
    max-width: 800px;
    z-index: 10;
  }
`;

const Label = styled.div`

`;

class FourOhFour extends Component {
  render() { 
    return (
      <StyledSlat>
        <img className="fourohfour" src="/assets/404.png" alt="404"/>
      </StyledSlat>
    )
  }
}
 
export default FourOhFour;