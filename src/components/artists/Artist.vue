<template>
  <div>
    <ArtistInfo />
    <h1>{{artist.name}}</h1>
    <p>{{artist.realname}}</p>
    <img :src="artist.images[0].uri" id="photo">
    <span>{{artist.profile}}</span>
    

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
  // computed: {
  //   fixedProfile: function(artist) {
  //     let banana = artist;
  //     console.log(banana.profile.replace(/\[]\ , \<\>/g));
  //   }
  // },
  created() {
    api.getArtistDetail(this.artist.id)
      .then(result => this.artist = result); 
  }
};
</script>

<style scoped>
#photo {
  height: 200px;
  float: left;
}
li {
  list-style: none;
}
p {
  font-style: italic;
}
</style>
