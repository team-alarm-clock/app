<template>
  <section>
      <li v-for="result in results.results"
          :key="result.id">
          {{result.title}}
      </li>
  </section>
</template>

<script>
export default {
  props: {
    results: null
  }
};
</script>

<style>

</style>
