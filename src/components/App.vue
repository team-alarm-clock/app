<template>
  <div id="app">
    <Header />
    <RouterView></RouterView>
  </div>
</template>

<script>
import Header from './shared/Header';
export default {
  components: {
    Header
  },
  data() {
    return {
      result: null
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
