<template>
  <div>
    <ArtistInfo />
    {{artist.id}}

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
