<template>
    <section>
        <form @submit.prevent="handleSubmit">
            <input v-model="keyword">
            <button>Search</button>
        </form>
        <ul >
            <ArtistList :results="results" />
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
      results: []
    };
  },
  watch: {
    search(newSearch) {
      if(this.keyword !== newSearch) {
        this.keyword = newSearch;
      }
    }
  },
  created() {
    api.getArtists()
      .then(result => this.results = result);
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        query: {
          search: encodeURIComponent(this.keyword)
        }
      });
    }
  }
};
</script>

<style>

</style>
