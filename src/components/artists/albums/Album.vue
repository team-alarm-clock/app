<template>
  <div class="grid-list">
    <li v-on:click="handleSelect(release)">
      {{release.title}}
      {{release.thumb}}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    release: null
  },
  methods: {
    handleSelect(release) {
      console.log('clicked', release);
    }
  }
};
</script>

<style>

</style>
