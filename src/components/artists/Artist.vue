<template>
  <div>
    <ArtistInfo />
    <div v-if="displayArtist">
      <h1>{{displayArtist.name}}</h1>
      <p>{{displayArtist.profile}}</p>
      <img :src="displayArtist.images[0].uri" id="photo">
      <!-- <span>{{normailzedProfile}}</span> -->
    </div>
    <div>
      <AlbumList :releases="releases" />
    </div>
  

  </div>
</template>

<script>
import ArtistInfo from './ArtistInfo';
import api from '../../services/api.js';
import AlbumList from './albums/AlbumList';
// import Albums from '../artists/albums/Albums';
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
  },
  // // computed:  {
  // //   normailzedProfile() {
  // //     // console.log(typeof this.artist.profile);
  // //     return this.artist.profile.replace(/\[[^]]*\]/gm, '');
  // //   } 
  // }
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
