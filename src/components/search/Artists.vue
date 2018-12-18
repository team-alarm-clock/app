<template>
  <section>
    <h2>Search artist</h2>
    <Search :onSearch="handleSearch" />
    <ul>
      <ArtistList v-for="artist in artists"
        :key="artist.id"
        :artist="artist"
      />
    </ul>
  </section>
</template>

<script>
import ArtistList from './ArtistList';
import Search from './Search';
import api from '../../services/api.js';
export default {
  data() {
    return {
      artists: null,
      search: decodeURIComponent(this.$route.query.search)
    };
  },
  components: {
    Search,
    ArtistList
  },
  created() {
    this.searchArtist();
  },
  methods: {
    handleSearch(search) {
      console.log('search', search);
      this.search = search || '';
      this.searchArtist();
    },
    searchArtist() {
      api.getArtists(this.search)
        .then(artists => {
          this.artists = artists.results;
          console.log('here', this.artists);
        }).catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      console.log('new', newSearch);
      const oldSearch = oldRoute.query.search;
      console.log('old', oldSearch);
      if(newSearch === oldSearch) return;
      this.search = decodeURIComponent(newSearch);
      console.log('here', this.search);
      this.searchArtist();
    }
  }
};

</script>

<style>

</style>
