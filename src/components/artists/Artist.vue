<template>
  <div>
    <ArtistInfo />
    <div v-if="displayArtist">
      <h1>{{displayArtist.name}}</h1>
      <p v-if="displayArtist.profile">{{displayArtist.profile}}</p>
      <span v-if="displayArtist.images">
      <img :src="displayArtist.images[0].uri" id="photo">
      </span>
    </div>
    <div>
      <AlbumList :releases="releases" />
    </div>
  

  </div>
</template>

<script>
import ArtistInfo from './ArtistInfo';
import api from '../../services/api.js';
import AlbumList from '../albums/AlbumList';

export default {
  data() {
    return {
      releases: null,
      displayArtist: null
    };
  },
  props: {
    artist: Object
  },
  components: {
    AlbumList,
    ArtistInfo
    
  },
  created() {
    api.getArtistDetail(this.artist.id)
      .then(result => this.displayArtist = result); 
    api.getReleases(this.artist.id)
      .then(results => {
        console.log('here', results);
        return this.releases = results.releases;
      });
  }
};
</script>

<style scoped>
#photo {
  height: 200px;
  float: left;
}
p {
  font-style: italic;
}

</style>
