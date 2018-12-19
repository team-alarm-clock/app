<template>
  <div>
    <ArtistInfo />
    {{artist.profile}}

  </div>
</template>

<script>
import ArtistInfo from './ArtistInfo';
import api from '../../services/api.js';
export default {
  props: {
    artist: Object
  },
  components: {
    ArtistInfo
  },
  created() {
    api.getArtistDetail(this.artist.id); 
  },
  methods: {
    getDetail() {
      api.getArtistDetail(this.artist.id)
        .then(artist => {
          this.artist = artist.results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
img {
  height: 100px;
}
li {
  list-style: none;
}
</style>
