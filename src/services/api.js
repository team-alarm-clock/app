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
  
  getArtists(searchTerm) {
    return fetch(`https://api.discogs.com/database/search?q=${encodeURIComponent(searchTerm)}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Discogs key=ywNmMEUdTiredbCNzOTu, secret=uWhelbjFMNJQOBOXiuqGgiPJznmbsLJG'
      }
    }
    )
      .then(response => response.json());
  },


  getArtistDetail(id) {
    return fetch(`https://api.discogs.com/artists/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Discogs key=ywNmMEUdTiredbCNzOTu, secret=uWhelbjFMNJQOBOXiuqGgiPJznmbsLJG'
      }

    }
    )
      .then(response => response.json());
  
  },

  getReleases(id) {
    return fetch(`https://api.discogs.com/artists/${id}/releases?year,desc`, {
      method: 'GET',
      headers: {
        'Authorization': 'Discogs key=ywNmMEUdTiredbCNzOTu, secret=uWhelbjFMNJQOBOXiuqGgiPJznmbsLJG'        
      }
    })
      .then(response => response.json());
  },

  getFavorites() {
    return fetch('/api/artists', getOptions('GET'))
      .then(response => response.json());
  }
};

