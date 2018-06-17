import React, { Component } from 'react'
import { includes, find } from 'lodash';
const API_BASE = 'https://www.enfoot.com/api/wp-json/wp/v2';

export const { Provider, Consumer } = React.createContext({
  products: [],
  currentProduct: null,
});

export class AppProvider extends Component {
  state = {
    loading: true,
    allProducts: [],
    products: [],
    filterCategory: null,
    categories: [],
    tags: [],
    homePage: null,
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

  getPost = (slug) => {
    return find(this.state.posts, p => p.slug === slug);
  }

  getCategories = () => {
    return fetch(`${API_BASE}/categories`);
  }
  
  getTags = () => {
    return fetch(`${API_BASE}/tags`);
  }

  loadHomePage = () => {
    fetch(`${API_BASE}/pages/61`).then(res => res.json().then(homePage => {
      this.setState({ homePage });
    }));
  }
  
  componentDidMount = () => {
    Promise.all([this.getProducts(), this.getCategories(), this.getTags(), this.get]).then( values => {
      Promise.all([values[0].json(), values[1].json(), values[2].json()]).then(parsedValues => {
        let products = [...parsedValues[0], ...parsedValues[0], ...parsedValues[0], ...parsedValues[0]]
        this.setState({
          loading: false,
          allProducts: products,
          products: products,
          categories: parsedValues[1],
          tags: parsedValues[2]
        });
      })
    })
  }

  onTabClick = (category) => {
    this.setState(prevState => {
      if (category.id === prevState.filter.category) {
        return {
          ...prevState,
          products: prevState.allProducts,
          filter: {
            ...prevState.filter,
            category: null
          }
        }
      } else {
        return {
          products: prevState.allProducts.filter(product => includes(product.categories, category.id)),
          filter: {
            ...prevState.filter,
            category: category.id
          }
        }
      }
    });
  }

  render() {
    const value = {
      ...this.state,
      onTabClick: this.onTabClick,
      getProduct: this.getProduct,
      loadHomePage: this.loadHomePage
    };
    window.state = value;
    return (
      <Provider value={value}>{this.props.children}</Provider>
    );
  }
}

