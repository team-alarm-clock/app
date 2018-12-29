<template>
  <section class="team">
    <h2>ABOUT US</h2>
    <Bio v-for="bio in bios"
      :key="bio.name"
      :bio="bio"/>
  </section>
</template>

<script>
import bios from './bios';
import Bio from './Bio';

export default {
  data() {
    return {
      bios
    }
  },
  components: {
    Bio
  }
};
</script>

<style scoped>
/* don't put tag names in your classes */
.team {
  padding: 50px;
}

</style>
