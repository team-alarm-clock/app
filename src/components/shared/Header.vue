<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/search">Search</RouterLink>
        <RouterLink to="/artist-detail">Artists</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/about-us">About Us</RouterLink>
    </nav>
</template>

<script>
export default {

};
</script>

<style>
nav {
    display: flex;
    justify-content: space-around;
}
</style>
