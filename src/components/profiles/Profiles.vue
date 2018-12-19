<template>
  <div class="badges-container">
    <h2>My Badges</h2>
    <div class="badges">
     <v-layout align-center justify-space-around>
       <icon name="flag"></icon>
       <v-icon>far fa-calendar-alt</v-icon>
       <v-icon>fas fa-trophy</v-icon>
     </v-layout>
    </div>

    <section>
      <h2>My favorite artists</h2>
    </section>

    <RouterLink to="/search">Search</RouterLink>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
