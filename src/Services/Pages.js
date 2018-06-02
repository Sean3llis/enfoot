const API_BASE = 'https://www.enfoot.com/api/wp-json/wp/v2';

export const PageService = {
  getAbout() {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE}/pages/37`)
        .then(res => res.json().then(page => {
          resolve(page);
        }))
        .catch(err => reject(err));
    })
  }
}

