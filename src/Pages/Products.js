import React, { Component } from 'react';
import styled from 'styled-components';
import { Slat, Column, Row, BREAK_POINTS } from '../Styles';
import { Consumer } from '../Services/AppProvider';
import Filter from '../Components/Filter';
import ProductTile from '../Components/ProductTile';
import LoadingIcon from '../Components/LoadingIcon';
import Naner from '../Components/Naner';

const StyledRow = styled(Row)`
  padding-bottom: 40px;
  width: 100%;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  @media ${BREAK_POINTS.mobile} {
    flex-direction: column;
  }
`;

const NanerWrapper = styled.div`
  
`;

class Products extends Component {
  renderProducts = (products) => {
    return products.map((product, i) => (
      <Column key={`${product.slug}-${i}`} span={3}>
        <ProductTile i={i} {...product} />
      </Column>
    ));
  }

  render() { 
    return (
      <Consumer>
        {productState => (
          <StyledSlat>
            <Filter filter={productState.filter} onTagClick={productState.onTagClick} />
            <StyledRow>
              {(productState.products.length === 0) && (
                <LoadingWrapper>
                  <LoadingIcon />
                </LoadingWrapper>
              )}
              {this.renderProducts(productState.products)}
              {/* <Naner width="100%" /> */}
            </StyledRow>
          </StyledSlat>
        )}
      </Consumer>
    )
  }
}
 
export default Products;