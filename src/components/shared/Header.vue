<template>
    <header>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/search">SEARCH</RouterLink>
        <RouterLink to="/profile">PROFILE</RouterLink>
        <RouterLink to="/about-us">ABOUT US</RouterLink>
    </header>
</template>

<script>
export default {

};
</script>

<style scoped>
header {
    padding: 20px;
    display: flex;
    justify-content: space-around;
}
</style>
