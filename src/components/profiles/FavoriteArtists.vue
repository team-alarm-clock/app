<template>
  <section>
    <ul v-for="favorite in favorites"
      :key="favorite.id">
      <li>
        {{favorite.artist}}
        {{favorite.album}}
      </li>

    </ul>

  </section>
</template>

<script>
export default {
  props: {
    favorites: null
  }
};
</script>

<style>

</style>
