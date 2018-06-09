import React from 'react'
import { find } from 'lodash';
const API_BASE = 'https://www.enfoot.com/api/wp-json/wp/v2';

export const { Provider, Consumer } = React.createContext({
  posts: [],
  currentProduct: null,
});

export const PostService = {
  getPosts() {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE}/posts`)
        .then(res => res.json().then(posts => {
          resolve(posts)
        }))
        .catch(err => reject(err));
    })
  },
  getPost(slug) {
    return new Promise((resolve, reject) => {
      this.getPosts().then(posts => {
        resolve(find(posts, { slug }))
      });
    });
  }
}

