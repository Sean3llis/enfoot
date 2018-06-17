import React, { Component } from 'react';
import { Slat } from '../Styles';
import LinkSlider from '../Components/LinkSlider';
import { Consumer } from '../Services/AppProvider';

export default class Home extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Consumer>
        {(productState) => {
          if (!productState.homePage) {
            productState.loadHomePage();
            return <div>loading...</div>
          }
          return (
          <div>
            <Slat>
              <LinkSlider slides={productState.homePage.acf.slides} />
            </Slat>
          </div>
          );
        }}
      </Consumer>
    );
  }
}