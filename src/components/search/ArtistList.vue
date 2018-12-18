<template>
  <section>
      <li v-for="artist in artists"
          :key="artist.id">
          {{artist.title !== "Undefined" ? artist.title : "no title"}}
          {{artist.id}}
      </li>
  </section>
</template>

<script>
export default {
  props: {
    artists: null
  }
};
</script>

<style>

</style>
