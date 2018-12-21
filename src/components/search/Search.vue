<template>
  <section>
      <form @submit.prevent="handleSubmit">
          <input v-model="keyword">
          <button>Search</button>
      </form>
  </section>
</template>

<script>
export default {
  props: {
    search: String,
    onSearch: Function
  },
  data() {
    return {
      keyword: this.search || '',
    };
  },
  watch: {
    search(newSearch) {
      if(this.keyword !== newSearch) {
        this.keyword = newSearch;
      }
    }
  },
  methods: {
    handleSubmit() {
      this.onSearch(this.keyword);
      this.$router.push({
        query: {
          search: encodeURIComponent(this.keyword)
        }
      });
    }
  }
};
</script>

<style scoped>
section {
  border: 1px solid black;
  width: 50vw;
  margin: auto;
  padding: 10px;
}
</style>
