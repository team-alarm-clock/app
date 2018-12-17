<template>
    <section>
        <h2>THIS IS THE HOME PAGE</h2>
        {{result}}
    </section>
</template>

<script>
import api from '../../services/api.js';
export default {
  data() {
    return {
      result: null
    };
  },
  created() {
    api.getArtists()
      .then(result => this.result = result);
  }

};
</script>

<style>

</style>
