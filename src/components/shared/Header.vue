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

<style scoped>
header {
    background: blanchedalmond;
    padding: 20px;
    display: flex;
    justify-content: space-around;
}
</style>
