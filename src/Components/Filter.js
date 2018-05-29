import React, { Component } from 'react';
import styled from 'styled-components';
import { partial } from 'lodash';
import { Slat } from '../Styles';
import { Consumer } from '../Services/AppProvider';

const StyledFilter = styled(Slat)`
  width: 200px;
  text-align: right;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 0px 16px;
  margin-top: 48px;
`;

const CategoryLink = styled.div`
  padding: 2px 6px;
  margin-right: 6px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${props => props.active ? props.theme.b300 : 'transparent'};
  color: ${props => props.active ? props.theme.white : props.theme.b300};
  &:hover {
    cursor: pointer;
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