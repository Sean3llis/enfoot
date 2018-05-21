import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CrumbWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  margin: 24px 0px;
`;

const CrumbLink = styled(Link)`
  padding-right: 12px;
  margin-right: 8px;
  position: relative;
  color: ${props => props.theme.linkColor};
  &:visited {
    color: ${props => props.theme.linkColor}
  }
  :after {
    content: '>';
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Crumb = styled.div`

`;

class BreadCrumb extends Component {
  crumb = (crumb, i) => {
    if (!crumb) return;
    return (crumb.to)
      ? <CrumbLink key={i} to={crumb.to}>{crumb.label}</CrumbLink>
      : <Crumb key={i} >{crumb.label}</Crumb>
  }

  render() { 
    return (
      <CrumbWrapper>
        {this.props.crumbs.map(this.crumb)}
      </CrumbWrapper>
    )
  }
}
 
export default BreadCrumb;