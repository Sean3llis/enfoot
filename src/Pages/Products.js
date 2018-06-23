import React, { Component } from 'react';
import styled from 'styled-components';
import { Slat, Column, Row, BREAK_POINTS } from '../Styles';
import { Consumer } from '../Services/AppProvider';
import Filter from '../Components/Filter';
import ProductTile from '../Components/ProductTile';
import Loader from '../Components/Loader';

const StyledRow = styled(Row)`
  padding-bottom: 40px;
  width: 100%;
`;

const StyledSlat = styled(Slat)`
  display: flex;
  flex-direction: row;
  @media ${BREAK_POINTS.mobile} {
    flex-direction: column;
  }
`;

class Products extends Component {
  // updateCategory = (productState) => {
  //   if (this.props.match && this.props.match.params && this.props.match.params.categorySlug) {
  //     const categorySlug = this.props.match.params.categorySlug;
  //     if (productState.filterCategory === categorySlug) return;
  //     if (productState.filterCategory !== categorySlug) {
  //       productState.setCategory(categorySlug);
  //     }
  //   } else {
  //     productState.setCategory(null);
  //   }
  // }

  componentDidMount() {
    const { productState } = this.props;
    if (this.props.match && this.props.match.params && this.props.match.params.categorySlug) {
      const categorySlug = this.props.match.params.categorySlug;
      if (productState.filterCategory === categorySlug) return;
      if (productState.filterCategory !== categorySlug) {
        productState.setCategory(categorySlug);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    try {
      if (prevProps.match.params.categorySlug !== this.props.match.params.categorySlug) {
        const categorySlug = this.props.match.params.categorySlug;
        this.props.productState.setCategory(categorySlug);
      }
    } catch (error) {
      
    }
  }

  renderProducts = (products) => {
    return products.map((product, i) => (
      <Column key={`${product.slug}-${i}`} span={3}>
        <ProductTile i={i} {...product} />
      </Column>
    ));
  }

  render() {
    const { productState } = this.props;
    return (
      <StyledSlat>
        <Filter filter={productState.filter} onTagClick={productState.onTagClick} />
        <StyledRow>
          {this.renderProducts(productState.products)}
        </StyledRow>
      </StyledSlat>
    )
  }
}

class ProductConsumer extends Component {
  render() {
    return (
      <Consumer>
        {productState => {
          if (productState.loading) return <Loader />;
          return <Products {...this.props} productState={productState} />
        }}
      </Consumer>
    )
  }
}

export default ProductConsumer;