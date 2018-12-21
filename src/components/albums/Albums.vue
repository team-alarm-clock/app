<template>
  <section v-if="releases">
  <!-- {{releases}} -->
    <AlbumList :releases="releases"
    :onSelect="handleSelect"/> 
    <Album :release="selected" />
    <div v-if="sortedReleases">{{sortedReleases}}</div>
  </section>
</template>

<script>
import AlbumList from './AlbumList';
import Album from './Album';
export default {
  data() {
    return {
      error: null
    };
  },
  props: {
    releases: Array
  },
  components: {
    AlbumList,
    Album
  },
  created() {
    this.releases = [
      { title: '',
        thumb: ''
      },
      { title: '',
        thumb: ''
      },

    ];
  } 
};
</script>

<style>

</style>
