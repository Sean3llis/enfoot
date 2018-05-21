import React, { Component } from 'react'
import { includes, find } from 'lodash';
const API_BASE = 'https://www.enfoot.com/api/wp-json/wp/v2';

export const { Provider, Consumer } = React.createContext({
  products: [],
  currentProduct: null,
});

export class AppProvider extends Component {
  state = {
    allProducts: [],
    products: [],
    filterCategory: null,
    categories: [],
    tags: [],
    filter: {
      category: null,
      tags: []
    }
  }

  getProducts = () => {
    return fetch(`${API_BASE}/product`);
  }

  getProduct = (slug) => {
    return find(this.state.products, p => p.slug === slug);
  }

  getCategories = () => {
    return fetch(`${API_BASE}/categories`);
  }
  
  getTags = () => {
    return fetch(`${API_BASE}/tags`);
  }
  
  componentDidMount = () => {
    this.getProducts().then( res => res.json().then( products => {
      this.setState({ allProducts: products, products })
    }));
    this.getCategories().then( res => res.json().then( categories => {
      this.setState({
        categories
      })
    }));
    this.getTags().then(res => res.json().then(tags => {
      this.setState({ tags })
    }));
  }

  onTabClick = (category) => {
    this.setState(prevState => ({
      products: prevState.allProducts.filter(product => includes(product.categories, category.id)),
      filter: {
        ...prevState.filter,
        category: category.id
      }
    }));
  }

  render() {
    const value = {
      ...this.state,
      onTabClick: this.onTabClick,
      getProduct: this.getProduct
    };
    window.state = value;
    return (
      <Provider value={value}>{this.props.children}</Provider>
    );
  }
}

