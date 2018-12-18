<template>
    <header>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/search">Search</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/about-us">About Us</RouterLink>
    </header>
</template>

<script>
export default {

};
</script>

<style>
header {
    display: flex;
    justify-content: space-around;
}
</style>
