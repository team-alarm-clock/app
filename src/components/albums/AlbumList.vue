<template>
  <ul class="albums">
    <Album v-for="release in releases" :key="release.id" :release="release" :onSelect="handleReleaseSelect"/>
  </ul>
</template>

<script>
import Album from './Album';
import api from '../../services/api.js';

export default {
  props: {
    releases: Array,
    onSelect: Function
  },
  components: {
    Album
  },
  methods: {
    handleReleaseSelect(release) {
      api.saveRelease(release)
        .then(releases => {
          // (1) This component doesn't own the data,
          // so it shouldn't update:
          // this.releases = releases.results;
          
          // (2) It doesn't matter because you are navigating 
          // away to the profile page. 
          // Is this correct behavior??? Would I not want to add more
          // albums???
          this.$router.push('/profile');
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
};
</script>

<style>

.albums {
    padding: 0;
    margin-top:100px;    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: 500px;
}

/* this goes in the Album component */

.albums li {
    list-style: none;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    padding: 15px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}

</style>
