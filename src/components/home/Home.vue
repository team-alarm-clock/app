<template>
    <section>
        <h2>THIS IS THE HOME PAGE</h2>
        {{search.results[0].title}}
    </section>
</template>

<script>
import api from '../../services/api.js';
export default {
  data() {
    return {
      search: []
      
    };
  },
  created() {
    api.getArtists()
      .then(result => this.search = result);
  }

};
</script>

<style>

</style>
