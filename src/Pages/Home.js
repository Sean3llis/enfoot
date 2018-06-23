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
              <ProductSlider title={'Featured'} categorySlug={'featured'} products={productState.getProductsByCategoryID(11)}/>
            </Slat>
            <Slat>
              <ProductSlider title={'Cat1'} titleColor={'#6a7f6e'} titlePlacement={'left'} categorySlug={'cat1'} products={productState.getProductsByCategoryID(2)} />
            </Slat>
          </div>
          );
        }}
      </Consumer>
    );
  }
}