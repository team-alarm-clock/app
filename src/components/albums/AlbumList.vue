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
      console.log('this is your', release);
      api.saveRelease(release)
        .then(releases => {
          this.releases = releases.results;
        }).catch(err => {
          console.log(err);
        });
    },

  }

};
</script>

<style>
.albums {
    padding: 0;
    margin-top:.5%;    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: 500px;
}
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
