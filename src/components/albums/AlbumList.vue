<template>
     <ul class="albums">
      <Album v-for="release in releases" :key="release.id" :release="release" :onSelect="handleSelect"/>
    </ul>
</template>

<script>
import Album from './Album';
export default {
  props: {
    releases: Array,
    onSelect: Function
  },
  components: {
    Album
  },
  methods: {
    handleSelect(release) {
      this.selected = release === this.selected ? null : release;
      console.log('this is your', release);
    }
  }

};
</script>

<style>
.albums {
    padding: 0;
    margin-top:.5%;    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: 500px;
}
.albums li {
    list-style: none;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    padding: 15px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}
</style>
