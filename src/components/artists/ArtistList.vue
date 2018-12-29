<template>
  <li v-on:click="onSelect(artist)">
    {{artist.title !== "Undefined" ? artist.title : "no title"}}
  </li>  
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
