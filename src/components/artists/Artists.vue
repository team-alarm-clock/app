<template>
  <section>

    <section v-if="!selected">
      <h2>Search artist</h2>
      <Search :onSearch="handleSearch" />
      <ul v-if="artists">
        <ArtistList v-for="artist in artists"
          :key="artist.id"
          :artist="artist"
          :onSelect="handleSelect"
        />
      </ul>
    </section>

    <section v-else>
      <Artist :artist="selected"/>
    </section>

  </section>
</template>

<script>
import Artist from './Artist';
import ArtistList from './ArtistList';
import Search from '../search/Search';
import api from '../../services/api.js';

export default {
  data() {
    return {
      artists: null,
      selected:null,
      search: decodeURIComponent(this.$route.query.search)
    };
  },
  components: {
    Search,
    ArtistList,
    Artist
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
      api.getArtists(this.search)
        .then(artists => {
          this.artists = artists.results;
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
li {
  list-style: none;
}
</style>
