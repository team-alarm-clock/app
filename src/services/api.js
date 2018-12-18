
export default {

  getArtists(searchTerm) {
    return fetch(`https://api.discogs.com/database/search?q=${encodeURIComponent(searchTerm)}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Discogs key=ywNmMEUdTiredbCNzOTu, secret=uWhelbjFMNJQOBOXiuqGgiPJznmbsLJG'
      }
    }
    )
      .then(response => response.json()); 
  }
};

