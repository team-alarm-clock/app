<template>
  <section>
      <li >
          {{artist.title !== "Undefined" ? artist.title : "no title"}}
          {{artist.id}}
      </li>
      
  </section>
</template>

<script>
export default {
  props: {
    artist: null
  }
};
</script>

<style>

</style>
