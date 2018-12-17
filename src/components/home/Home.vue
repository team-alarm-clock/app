<template>
    <section>
        <h2>THIS IS THE HOME PAGE</h2>
    </section>
</template>

<script>
import api from '../../services/api.js';
export default {
  created() {
    api.getArtists()
      .then(response => {
        console.log('got here');
        this.artist = response.artist;
      });
  }

};
</script>

<style>

</style>
