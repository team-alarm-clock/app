<template>
    <section>
        <h1>Poster Child</h1>
        <p>ADD YOUR FAVORITE ALBUMS FROM YOUR FAVORITE ARTISTS</p>
        <p>Click <RouterLink to="/search">SEARCH</RouterLink> to start!</p>
    </section>
</template>

<script>
export default {

};
</script>

<style scoped>

h1 {
    text-transform: uppercase; 
}

#filler {
    width: 50vw;
    height: 75px;
    overflow: scroll;
    margin: auto;
}
section {
    border: 1px black solid;
    margin: auto;
    width: 75vw;
}
</style>
