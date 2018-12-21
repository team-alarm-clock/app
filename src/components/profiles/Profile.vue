<template>
  <div class="badges-container">
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
    <Loading :loading="loading"/>
      <h2>MY FAVORITE ALBUM &amp; ARTISTS</h2>
      <ul>
        <FavoriteArtists v-for="favorite in favorites"
          :favorite="favorite"
          :key="favorite.album"
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
import Loading from '../shared/Loading';
export default {
  data() {
    return {
      loading: true,
      favorites: []
    };
  },
  components: {
    FavoriteArtists,
    Loading
  },
  created() {
    api.getFavorites()
      .then(favorites => {
        this.favorites = favorites;
        this.loading = false;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleSelect(favorite) {
      this.selected = favorite;
      console.log(this.selected);
    }
  }

};
</script>

<style>

</style>
