<template>
  <div class="badges-container">
    <h2>My Badges</h2>
    <div class="badges">
    <!-- <v-container>
     <v-layout align-center justify-space-around>
       <v-flex> -->
       <!-- <icon name="flag"></icon>
       <v-icon>far fa-calendar-alt</v-icon>
       <v-icon>fas fa-trophy</v-icon> -->
       <!-- </v-flex>
     </v-layout>
    </v-container> -->
    </div>

    <section>
      <h2>My favorite artists</h2>
      <ul>
        <FavoriteArtists v-for="favorite in favorites"
          :key="favorite.album"
          :favorite="favorite"
          :onSelect="handleSelect"
         />
      </ul>
    </section>

    <RouterLink to="/search">Back to Search</RouterLink>
  </div>
</template>

<script>
import api from '../../services/api.js';
import FavoriteArtists from './FavoriteArtists';
export default {
  data() {
    return {
      favorites: null
    };
  },
  components: {
    FavoriteArtists
  },
  created() {
    api.getFavorites()
      .then(favorites => {
        this.favorites = favorites;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleSelect(favorite) {
      this.selected = favorite;
    }
  }

};
</script>

<style>

</style>
