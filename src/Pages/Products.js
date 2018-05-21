import React, { Component } from 'react';
import styled from 'styled-components';
import { Slat, Column, Row } from '../Styles';
import { Consumer } from '../Services/AppProvider';
import Filter from '../Components/Filter';
import ProductList from '../Components/ProductList';
import ProductTile from '../Components/ProductTile';

const StyledRow = styled(Row)`
  padding-bottom: 40px;
`;

class Products extends Component {
  renderProducts = (products) => {
    return products.map((product, i) => (
      <Column key={i} span={4}>
        <ProductTile {...product} />
      </Column>
    ))
  }

  render() { 
    return (
      <Consumer>
        {productState => (
          <Slat>
            <Filter filter={productState.filter} onTagClick={productState.onTagClick} />
            <StyledRow>
              {this.renderProducts(productState.products)}
              {this.renderProducts(productState.products)}
              {this.renderProducts(productState.products)}
            </StyledRow>
          </Slat>
        )}
      </Consumer>
    )
  }
}
 
export default Products;