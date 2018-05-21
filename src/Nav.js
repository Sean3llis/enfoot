import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { partial } from 'lodash';
import styled from 'styled-components';
import { Slat } from './Styles';
import EnfootLogo from './Icons/enfoot';

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
`;

const NavLink = styled(Link)`
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


export default class Nav extends Component {
  state = {
    offsetLeft: 0,
    offsetWidth: 0,
  }

  menu = [
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Discover' },
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

  updateUnderline = (offsetLeft, offsetWidth) => {
    if (typeof offsetLeft !== 'number') return;
    this.setState({ offsetLeft, offsetWidth });
  }

  setup = (menuItem, ele) => {
    this.innerRefs[menuItem.path] = ele;
  }

  render() {
    return (
      <Slat>
        <StyledNav>
          {this.menu.map((menuItem, i) => {
            return (
              <NavLink innerRef={partial(this.setup, menuItem)} key={i} to={menuItem.path} onMouseEnter={this.mouseEnter}>{menuItem.label}</NavLink>
            );
          })}
          <Underline offsetWidth={this.state.offsetWidth} offsetLeft={this.state.offsetLeft} />
        </StyledNav>
      </Slat>
    )
  }
}