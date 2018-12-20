<template>
  <section>
      <li v-on:click="onSelect(artist)">
          {{artist.title !== "Undefined" ? artist.title : "no title"}}
          {{artist.id}}
      </li>
      
  </section>
</template>

<script>
export default {
  props: {
    artist: null,
    onSelect: Function
  }
};
</script>

<style>

</style>
