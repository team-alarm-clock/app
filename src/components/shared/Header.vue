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
</script>git

<style scoped>
header {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    background-color: #74b5e0;
    
}
a {
    color:white;
    font-weight:900;
    text-decoration: none;
    letter-spacing: 2px;}
a:hover {
    color:#2c3e50;
    font-weight:900;
    text-decoration: none;
    letter-spacing: 2px;}
</style>
