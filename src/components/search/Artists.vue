<template>
  <section>
    <h2>Search artist</h2>
    <Search :onSearch="handleSearch" />
    <ul v-if="artists">
      <ArtistList v-for="artist in artists"
        :key="artist.id"
        :artist="artist"
      />
    </ul>
    <div v-if="filteredArtists">{{filteredArtist}}</div>
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
  beforeUpdate() {
    this.artists = this.filteredArtist();
    console.log('before');
  },
  computed: {
    
  },
  methods: {
    filteredArtist() {
      if(this.artists) {
        const artist = this.artists.filter(artist => artist.type === 'artist');
        console.log('artist', artist);
        return artist ;
        
      }
    },
    handleSearch(search) {
      this.search = search || '';
      this.searchArtist();
    },
    searchArtist() {
      api.getArtists(this.search)
        .then(artists => {
          this.artists = artists.results;
        }).catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      if(newSearch === oldSearch) return;
      this.search = decodeURIComponent(newSearch);
      this.searchArtist();
    }
  }
};

</script>

<style>

</style>
