<template>
  <div>
    <h1>I am the Album Detail for Favorites</h1>
  
    <form @submit.prevent="handleSubmit">
      <p>
        <label>Artist:</label>
        <input v-model="artist.title" require>
      </p>
      <p>
        <label>Album Title:</label>
        <input v-model="goal.startDate" require>
      </p>

      <p>
        <label>Genre:</label>
        <input v-model="goal.endDate" require>
      </p>

      <button>Add</button>
    </form>

  
  </div>
</template>


<script>
import Profile from './Profile';
function initAlbum() {
  return {
    artist: '',
    title: '',
    genre: ''
  };
}
export default {
  props: {
    onAdd: initAlbum()
  },
  data() {
    return {
      album: initAlbum()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.album)
        .then(() => {
          this.album = initAlbum();
        });
    }
  }
};
</script>

<style>

</style>
