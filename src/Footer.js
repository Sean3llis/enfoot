import React, { Component } from 'react';
import styled from 'styled-components';
import { Footer as StyledFooter, Slat } from './Styles';
import { Link } from 'react-router-dom';
import Instagram from './Icons/instagram';
import Facebook from './Icons/facebook';


const StyledSlat = styled(Slat)`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

const IconWrapper = styled.div`
  width: 50%;
  text-align: right;
`;

const LinkWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 24px;
`;

const Icon = styled.a`
  margin-right: 16px;
  &:last-child {
    margin-right: 0px;
  }
`;

const CopyRight = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 16px;
  text-align: center;
  font-size: 10px;
`;

const StyledLink = styled(Link)`
  align-self: flex-start;
`;


export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <StyledSlat>
          <LinkWrapper>
            <StyledLink to={'/'}>Home</StyledLink>
            <StyledLink to={'/about'}>About</StyledLink>
            <StyledLink to={'/discover'}>Discover</StyledLink>
            <StyledLink to={'/words'}>Words</StyledLink>
            <StyledLink to={'/play'}>Play</StyledLink>
          </LinkWrapper>
          <IconWrapper>
            <Icon href={'https://www.instagram.com/enfoot/'} target={'_blank'}>
              <Instagram />
            </Icon>
            <Icon href={'https://www.instagram.com/enfoot/'} target={'_blank'}>
              <Facebook />
            </Icon>
          </IconWrapper>
          <CopyRight>Copyright Enfoot 2018</CopyRight>
        </StyledSlat>
      </StyledFooter>
    );
  }
}