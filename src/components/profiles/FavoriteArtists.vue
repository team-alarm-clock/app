<template>
  <section>
      <li v-on:click="onSelect(favorite)">
        Album: {{favorite.album}} |
        Artist: {{favorite.artist}}
      </li>
  </section>
</template>

<script>
export default {
  props: {
    favorite: null,
    onSelect: Function
  }
  // computed: {
  //   reformat: function() {return favorite.album.toUpperCase()};
  // }
};
</script>

<style>

</style>
