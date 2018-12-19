<template>
  <div>

    <ArtistInfo />
    <h1>{{artist.name}}</h1>
    <p>{{artist.realname}}</p>
    <img :src="artist.images[0].uri" id="photo">
    <span>{{artist.profile}}</span>
    
    <!-- <span>{{this.releases.releases.title}}</span> -->
    <!-- <Albums :releases="releases"/> -->
<div v-if="releases">
  <ul v-for="release in releases"
            :key="release.id">
      <li>
        <img :src="release.thumb">
        {{release.title}}
       
    </li>
  </ul>
</div>
  

  </div>
</template>

<script>
import ArtistInfo from './ArtistInfo';
import api from '../../services/api.js';
// import Albums from '../artists/albums/Albums';
export default {
  props: {
    artist: Object
  },
  data() {
    return {
      releases: null
    };
  },
  components: {
    ArtistInfo,
    
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
li {
  list-style: none;
}
p {
  font-style: italic;
}
</style>
