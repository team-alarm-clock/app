<template>
  <section>
    <Loading :loading="loading" />
    <div v-if="!selected">
      <h2>Search artist</h2>
      <Search :onSearch="handleSearch" />
      <ul v-if="artists">
        <ArtistList v-for="artist in artists"
          :key="artist.id"
          :artist="artist"
          :onSelect="handleSelect"
        />
      </ul>
    </div>
    <div v-else>
      <Artist :artist="selected"/>
    </div>
  </section>
</template>

<script>
import Artist from './Artist';
import ArtistList from './ArtistList';
import Search from '../search/Search';
import api from '../../services/api.js';
import Loading from '../shared/Loading';

export default {
  data() {
    return {
      artists: null,
      selected:null,
      loading: false,
      search: decodeURIComponent(this.$route.query.search)
    };
  },

  components: {
    Search,
    ArtistList,
    Artist,
    Loading
  },
  
  beforeUpdate() {
    this.artists = this.filteredArtist();
  },
  methods: {
    filteredArtist() {
      if(this.artists) {
        const artist = this.artists.filter(artist => artist.type === 'artist');
        return artist ;
      }
    },

    handleSearch(search) {
      this.search = search || '';
      this.searchArtist();
    },

    searchArtist() {
      this.loading = true;
      api.getArtists(this.search)
        .then(artists => {
          this.artists = artists.results;
          this.loading = false;
        }).catch(err => {
          console.log(err);
        });
    },

    handleSelect(artist) {
      this.selected = artist;
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
/* there is no li in this component :( */
/* move to component that actual has <li> */
li {
  list-style: none;
}
</style>
