<template>
    <section>
        <form @submit.prevent="handleSubmit">
            <input v-model="keyword">
            <button>Search</button>
        </form>
        <ul v-if="artists">
            <ArtistList :artists="artists" />
        </ul>
    </section>
</template>

<script>
import api from '../../services/api.js';
import ArtistList from './ArtistList';
export default {
  components: {
    ArtistList
  },
  props: {
    // search: String,
    onSearch: Function
  },
  data() {
    return {
      keyword: this.search || '',
      artists: [],
      search: decodeURIComponent(this.$route.query.search)
    };
  },
  watch: {
    search(newSearch) {
      if(this.keyword !== newSearch) {
        this.keyword = newSearch;
      }
    },
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      if(newSearch === oldSearch) return;
      this.search = decodeURIComponent(newSearch);
      this.searchArtist();
    }
  },

  methods: {
    handleSubmit() {
      this.$router.push({
        query: {
          search: encodeURIComponent(this.keyword)
        }
      });
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
  }
};
</script>

<style>

</style>
