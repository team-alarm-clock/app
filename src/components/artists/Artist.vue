<template>
  <section v-if="displayArtist">
    <h2>{{displayArtist.name}}</h2>
    <img :src="displayArtist.images[0].uri" id="photo">
    <p v-if="displayArtist.profile">{{displayArtist.profile}}</p>
    <AlbumList :releases="releases" />
  </section>
</template>

<script>
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
    AlbumList
  },
  created() {
    // Both block and inline arrow function okay, but be consistent!

    api.getArtistDetail(this.artist.id)
      .then(result => {
        this.displayArtist = result;
      }); 

    api.getReleases(this.artist.id)
      .then(results => {
        this.releases = results.releases;
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
