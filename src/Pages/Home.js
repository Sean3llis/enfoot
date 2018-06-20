import React, { Component } from 'react';
import { Slat } from '../Styles';
import LinkSlider from '../Components/LinkSlider';
import ProductSlider from '../Components/ProductSlider';
import { Consumer } from '../Services/AppProvider';
import Loader from '../Components/Loader';

export default class Home extends Component {
  render() {
    return (
      <Consumer>
        {(productState) => {
          if (!productState.homePage) {
            productState.loadHomePage();
            return <Loader />
          }
          return (
          <div>
            <Slat>
              <LinkSlider slides={productState.homePage.acf.slides} />
            </Slat>
            <Slat>
              <ProductSlider title={'Featured'} products={productState.getProductsByCategory(11)}/>
            </Slat>
            <Slat>
              <ProductSlider titleColor={'#6a7f6e'} titlePlacement={'left'} title={'Cat1'} products={productState.getProductsByCategory(2)} />
            </Slat>
          </div>
          );
        }}
      </Consumer>
    );
  }
}