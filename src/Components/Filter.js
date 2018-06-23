import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Consumer } from '../Services/AppProvider';

const StyledFilter = styled.div`
  width: 200px;
  text-align: right;
  padding-top: 64px;
  padding-right: 16px;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 8px 0px;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
  line-height: 24px;
  &:hover {
    cursor: pointer;
  }
`;

const LinkTitle = styled.div`
  font-family: 'Lora', sans-serif;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -1px;
  font-weight: bold;
  color: ${props => props.theme.b300};
`;

class Filter extends Component {
  renderCategories = (productState) => {
    return productState.categories.map((category, i) => {
      return (
        <StyledLink key={i} to={`/discover/category/${category.slug}`}>
          {category.name}
        </StyledLink>
      );
    });
  }

  render() { 
    return (
      <Consumer>
        {productState => (
          <StyledFilter>
            <LinkTitle>Categories</LinkTitle>
            <LinkWrapper>
              {this.renderCategories(productState)}
            </LinkWrapper>
          </StyledFilter>
        )}
      </Consumer>
    );
  }
}
 
export default Filter;