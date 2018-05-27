import React, { Component } from 'react';
import styled from 'styled-components';
import { partial, includes } from 'lodash';
import { Slat } from '../Styles';
import { Consumer } from '../Services/AppProvider';
import ProductTile from './ProductTile';

const StyledFilter = styled(Slat)`
  width: 200px;
  text-align: right;
`;

const Title = styled.div`
  font-size: 14px;
  letter-spacing: 2px;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  margin-top: 48px;
`;

const CategoryLink = styled.div`
  padding: 2px 6px;
  margin-right: 6px;
  color: ${props => props.active ? props.theme.linkColor : props.theme.b300};
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

class Filter extends Component {
  renderCategories = (productState) => {
    return productState.categories.map((category, i) => {
      return (
        <CategoryLink
          key={i}
          active={productState.filter.category === category.id}
          onClick={partial(productState.onTabClick, category)}>{category.name}</CategoryLink>
      );
    });
  }

  render() { 
    return (
      <Consumer>
        {productState => (
          <StyledFilter>
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