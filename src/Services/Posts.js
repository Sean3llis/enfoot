import React, { Component } from 'react'
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
  }
}

