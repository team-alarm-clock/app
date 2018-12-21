<template>
    <section>
        <h1>WELCOME TO POSTER CHILD!</h1>
        <p>Add your favorite albums from your favorite artists!</p>
        <p>Click <RouterLink to="/search">SEARCH</RouterLink> to start!</p>
    </section>
</template>

<script>
export default {

};
</script>

<style scoped>
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
