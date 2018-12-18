<template>
  <div>
    <section id="artist-bio">
    <img src="https://i5.walmartimages.com/asr/d3d8b574-a52e-40d0-9983-cad106ef899b_1.745d8e1c2faaee25f70cf4ba47603d59.jpeg"/>
    <h2>Artist Name</h2>
    <p>Bio...</p>
    </section>

    <main>
      <ul>
        <li>
          <a href="#">+</a>
          Song List Here
        </li>
        <li>Song List Here</li>
        <li>Song List Here</li>
        <li>Song List Here</li>
        <li>Song List Here</li>
      </ul>
      <RouterLink to="/profile">My Profile</RouterLink>
    </main>

    <section>
      <OtherUsers />
    </section>
  </div>
</template>

<script>
import OtherUsers from './OtherUsers';
export default {
  components: {
    OtherUsers
  }
};
</script>

<style>
img {
  height: 100px;
}
li {
  list-style: none;
}
</style>
