import React, { Component } from 'react';
import { Slat } from '../Styles';
import Banner from '../Components/Banner';
import Filter from '../Components/Filter';
import ProductList from '../Components/ProductList';
import { Consumer } from '../Services/AppProvider';

export default class Home extends Component {
  render() {
    return (
      <Consumer>
        {(productState) => {
          return (
          <div>
            <Slat><Banner /></Slat>
            <Slat><Filter /></Slat>
            <Slat><ProductList products={productState.products} /></Slat>
          </div>
          );
        }}
      </Consumer>
    );
  }
}