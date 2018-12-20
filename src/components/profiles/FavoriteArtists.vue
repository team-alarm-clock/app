<template>
  <section>
      <li v-on:click="onSelect(favorite)">
        {{favorite.artist}}
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
