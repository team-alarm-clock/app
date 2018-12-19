<template>
  <ul>
    <Album v-for="release in releases"
            :key="release.id" 
            :releases="releases"/>
  </ul>
</template>

<script>
import Album from './Album';
export default {
  props: {
    releases: Array
  },
  components: {
    Album
  }
};
</script>

<style>

</style>
