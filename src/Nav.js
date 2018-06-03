import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { partial } from 'lodash';
import styled, { keyframes } from 'styled-components';
import { Slat, BREAK_POINTS } from './Styles';
import EnfootLogo from './Icons/enfoot';

const mobileLinkAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const StyledNav = styled.nav`
  padding: 12px 0px;
  height: 48px;
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  position: relative;
  margin: 0 auto;
  @media ${BREAK_POINTS.mobile} {
    display: none;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  svg {
    fill: #fff;
  }
`;

const MobileNav = styled.nav`
  display: none;
  z-index: 25;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @media ${BREAK_POINTS.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    pointer-events: none;
    color: #fff;
  }
`;

const MobileLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  z-index: 35;
  flex: 1;
  margin: 12px 0px;
  opacity: 0;
  pointer-events: all;
  letter-spacing: 2px;
  text-decoration: uppercase;
  animation: ${mobileLinkAnimation} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${props => (props.delay + 1) * 100}ms;
`;

const MobileButton = styled.div`
  transition: all 0.4s ease-in-out;
  height: ${props => props.open ? 5000 : 50}px;
  width: ${props => props.open ? 5000 : 50}px;
  background: ${props => props.open ? props.theme.gradient : props.theme.b300};
  border-top-left-radius: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 30;
  pointer-events: all;
  span {
    position: absolute;
    bottom: 6px;
    right: 12px;
    font-size: 16px;
    font-weight: bold;
  }
`;

const NavLink = styled(Link) `
  text-decoration: none;
  color: #333;
  &:focus {
    color: #333;
  }
`;

const StyledLogo = styled(EnfootLogo)`
  margin-top: -5px;
`;

const Underline = styled.span`
  position: absolute;
  height: 2px;
  background-color: ${props => props.theme.b300};
  width: ${props => props.offsetWidth}px;
  left: ${props => props.offsetLeft}px;
  bottom: 8px;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(.62,0,.37,1.23);
`;

class Nav extends Component {
  state = {
    offsetLeft: 0,
    offsetWidth: 0,
    open: false
  }

  menu = [
    { path: '/about', label: 'About' },
    { path: '/discover', label: 'Discover' },
    { path: '/', label: <StyledLogo /> },
    { path: '/words', label: 'Words' },
    { path: '/play', label: 'Play' }
  ];

  innerRefs = {}

  componentDidMount() {
    const ref = this.innerRefs[this.props.location.pathname];
    if (ref) {
      const ele = ReactDOM.findDOMNode(ref);
      this.updateUnderline(ele.offsetLeft, ele.offsetWidth)
    }
  }

  mouseEnter = (e) => {
    const { target: { offsetLeft, offsetWidth }} = e;
    this.updateUnderline(offsetLeft, offsetWidth);
  }

  mouseLeave = (e) => {
    const ref = this.innerRefs[this.props.location.pathname];
    if (ref) {
      const ele = ReactDOM.findDOMNode(ref);
      this.updateUnderline(ele.offsetLeft, ele.offsetWidth)
    }
  }

  updateUnderline = (offsetLeft, offsetWidth) => {
    if (typeof offsetLeft !== 'number') return;
    this.setState({ offsetLeft, offsetWidth });
  }

  setup = (menuItem, ele) => {
    this.innerRefs[menuItem.path] = ele;
  }

  toggleMobile = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    return (
      <Slat>
        <StyledNav>
          {this.menu.map((menuItem, i) => {
            return (
              <NavLink
                key={i}
                innerRef={partial(this.setup, menuItem)} 
                to={menuItem.path}
                onMouseLeave={this.mouseLeave}
                onMouseEnter={this.mouseEnter}>
                {menuItem.label}
              </NavLink>
            );
          })}
          <Underline offsetWidth={this.state.offsetWidth} offsetLeft={this.state.offsetLeft} />
        </StyledNav>
        <MobileNav>
          <LinkWrapper>
            {this.state.open && this.menu.map((menuItem, i) => <MobileLink onClick={this.toggleMobile} delay={i} key={i} to={menuItem.path}>{menuItem.label}</MobileLink> )}
          </LinkWrapper>
          <MobileButton onClick={this.toggleMobile} open={this.state.open}><span>{this.state.open ? 'X' : 'M'}</span></MobileButton>
        </MobileNav>
      </Slat>
    )
  }
}

export default withRouter(Nav);