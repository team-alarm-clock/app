let token = '';

const getOptions = (method, data) => {
  const options = {
    method,
    headers: {}
  };

  if(data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  if(token) {
    options.headers.Authorization = token;
  }

  return options;
};

// 1) Create a variable to not repeat this over and over
// 2) You might want to update your discogs secret as it is avaiable in Github public repo,
// though if no billable feature it may not matter...
const DISCOGS_HEADERS = {
  Authorization: 'Discogs key=ywNmMEUdTiredbCNzOTu, secret=uWhelbjFMNJQOBOXiuqGgiPJznmbsLJG'
};

export default {
  signUp(profile) {
    return fetch('/api/auth/signup', getOptions('POST', profile))
      .then(response => {
        if(response.ok) {
          return response.json();
        }

        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },

  signIn(credentials) {
    return fetch('/api/auth/signin', getOptions('POST', credentials))
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },

  setToken(t) {
    token = t;
  },

  getFavorites() {
    return fetch('/api/artists', getOptions('GET'))
      .then(response => response.json());
  },
  
  saveRelease(release) {
    return fetch('/api/artists', getOptions('POST', release))
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },
  
  getArtists(searchTerm) {
    return fetch(`https://api.discogs.com/database/search?q=${encodeURIComponent(searchTerm)}`, {
      method: 'GET',
      headers: DISCOGS_HEADERS
    })
      .then(response => response.json());
  },

  getArtistDetail(id) {
    return fetch(`https://api.discogs.com/artists/${id}`, {
      method: 'GET',
      headers: DISCOGS_HEADERS
    })
      .then(response => response.json());
  
  },

  getReleases(id) {
    return fetch(`https://api.discogs.com/artists/${id}/releases?year,desc`, {
      method: 'GET',
      headers: DISCOGS_HEADERS
    })
      .then(response => response.json());
  },

};

