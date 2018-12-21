<template>
  <div>
    <h1>I am the Album Detail for Favorites</h1>
  
    <form @submit.prevent="handleSubmit">
      <h2>Edit an album!
      <p>
        <label>Artist:</label>
        <input v-model="artist.title" require>
      </p>
      <p>
        <label>Album Title:</label>
        <input v-model="album.id" require>
      </p>

      <button>Update</button>
    </form>

  
  </div>
</template>


<script>

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

<style scoped>

form {
  border: 1px solid #aaa;
  padding: 10px;
}
input, button {
  margin: 0 5px;
}
input {
  width: 125px;
  font-size: 1.05em;
}

</style>
