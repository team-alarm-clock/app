
export default {
  getArtists() {
    return fetch(`https://api.discogs.com/database/search?q=the+clash`,  {
      method: "GET",
      headers: {
        "Authorization": "Discogs key=ywNmMEUdTiredbCNzOTu, secret=uWhelbjFMNJQOBOXiuqGgiPJznmbsLJG"
      }
    }
  )
      .then(response => response.json());
    
  }
}

