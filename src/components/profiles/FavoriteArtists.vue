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
};
</script>

<style>

</style>
