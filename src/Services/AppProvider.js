import React, { Component } from 'react'
import { find } from 'lodash';
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
    aboutPage: null,
    filter: {
      category: null,
      tags: []
    }
  }

  getProducts = () => {
    return fetch(`${API_BASE}/product`);
  }

  getProductsByCategory = (category) => {
    return this.state.allProducts.filter(product => {
      return product.categories.includes(category.id);
    });
  }

  getProductsByCategoryID = (categoryID) => {
    return this.state.allProducts.filter(product => {
      return product.categories.includes(categoryID);
    });
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

  loadAboutPage = () => {
    fetch(`${API_BASE}/pages/37`).then(res => res.json().then(aboutPage => {
      this.setState({ aboutPage });
    }));
  }

  buildCategoryMap = (categories) => {
    const categoryMap = {};
    categories.forEach(category => {
      categoryMap[category.slug] = category;
    });
    return categoryMap;
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
          categoryMap: this.buildCategoryMap(parsedValues[1]),
          tags: parsedValues[2]
        });
      })
    })
  }

  setCategory = (categorySlug) => {
    this.setState(prevState => {
      if (this.state.filterCategory === categorySlug || !categorySlug) {
        return {
          filterCategory: null,
          products: prevState.allProducts
        };
      } else {
        return {
          filterCategory: categorySlug,
          products: this.getProductsByCategory(this.state.categoryMap[categorySlug])
        };
      }
    })
    // this.setState(prevState => {
    //   if (category.id === prevState.filter.category) {
    //     return {
    //       ...prevState,
    //       products: prevState.allProducts,
    //       filter: {
    //         ...prevState.filter,
    //         category: null
    //       }
    //     }
    //   } else {
    //     return {
    //       products: prevState.allProducts.filter(product => includes(product.categories, category.id)),
    //       filter: {
    //         ...prevState.filter,
    //         category: category.id
    //       }
    //     }
    //   }
    // });
  }

  render() {
    const value = {
      ...this.state,
      setCategory: this.setCategory,
      getProduct: this.getProduct,
      loadHomePage: this.loadHomePage,
      loadAboutPage: this.loadAboutPage,
      getProductsByCategory: this.getProductsByCategory,
      getProductsByCategoryID: this.getProductsByCategoryID
    };
    window.state = value;
    return (
      <Provider value={value}>{this.props.children}</Provider>
    );
  }
}

