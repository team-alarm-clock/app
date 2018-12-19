<template>
  <div>
    <ArtistInfo />

  </div>
</template>

<script>
import ArtistInfo from './ArtistInfo';
import api from '../../services/api.js';
export default {
  
  components: {
    ArtistInfo
  },
  created() {
    api.getArtistDetail(3310737); 
     
    
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
