<template>
  <section class="bio-body">
    <img :src="image" :alt="`${name} profile photo`">
    <section class="bio-col">
      <h3>{{name}}</h3>
      <p>{{blurb}}</p>
    </section> 
  </section>   
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    blurb: String
  }
};
</script>

<style scoped>

.bio-body {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 auto;
  text-align: left;
  width: 65%;
  margin-top: 40px;
  margin-bottom: 40px;
}

.bio-col {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

img {
  border-radius: 25% 25% 25% 25%;
  box-shadow: 5px 10px black;
}

h3 {
  font-size: 1.75em;
  padding: 20px;
  margin-bottom: 0;
}

p {
  font-size: 1.05em;
  margin: 0 auto;
  padding: 20px;
  padding-top: 0;
}

h1 {
  margin-bottom: 0;
}

</style>
