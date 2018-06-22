import React, { Component } from 'react';
import styled from 'styled-components';
import { Footer as StyledFooter } from './Styles';
import { Link } from 'react-router-dom';
import Instagram from './Icons/instagram';
import Facebook from './Icons/facebook';

const IconWrapper = styled.div`
  padding: 16px;
`;

const Icon = styled.a`

`;


export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <IconWrapper> 
          <Icon href={'https://www.instagram.com/enfoot/'} target={'_blank'}>
            <Instagram />
          </Icon>
          <Icon href={'https://www.instagram.com/enfoot/'} target={'_blank'}>
            <Facebook />
          </Icon>
        </IconWrapper>
      </StyledFooter>
    );
  }
}