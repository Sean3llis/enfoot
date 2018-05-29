import React, { Component } from 'react';
import styled from 'styled-components';
import { BREAK_POINTS } from '../Styles';
import ProductTile from './ProductTile';


const StyledProductList = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  @media ${BREAK_POINTS.mobile} {
    flex-direction: column;
  }
`;

export default class ProductList extends Component {
  renderProducts = (products) => {
    return products.map((product, i) => (
      <ProductTile key={i} {...product} />
    ))
  }
  
  render() {
    return (
      <StyledProductList>
        {this.renderProducts(this.props.products)}
      </StyledProductList>
    );
  }
}