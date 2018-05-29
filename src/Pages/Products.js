import React, { Component } from 'react';
import styled from 'styled-components';
import { Slat, Column, Row } from '../Styles';
import { Consumer } from '../Services/AppProvider';
import Filter from '../Components/Filter';
import ProductTile from '../Components/ProductTile';

const StyledRow = styled(Row)`
  padding-bottom: 40px;
  width: 100%;
`;

const NoShoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  width: 100%;
  height: 100vh;
`;

const StyledSlat = styled(Slat)`
  display: flex;
  flex-direction: row;
`;

class Products extends Component {
  renderProducts = (products) => {
    return products.map((product, i) => (
      <Column key={i} span={3}>
        <ProductTile {...product} />
      </Column>
    ))
  }

  render() { 
    return (
      <Consumer>
        {productState => (
          <StyledSlat>
            <Filter filter={productState.filter} onTagClick={productState.onTagClick} />
            <StyledRow>
              {(productState.products.length === 0) && (
                <NoShoes>x_x no shoes found!</NoShoes>
              )}
              {this.renderProducts(productState.products)}
              {this.renderProducts(productState.products)}
              {this.renderProducts(productState.products)}
              {this.renderProducts(productState.products)}
              {this.renderProducts(productState.products)}
            </StyledRow>
          </StyledSlat>
        )}
      </Consumer>
    )
  }
}
 
export default Products;