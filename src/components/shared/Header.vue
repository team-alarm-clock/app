<template>
    <header>
        <div class="logo">
            <h1>POSTER CHILD APP</h1>
            <h4>YOUR FAVORITE ARTISTS ALBUMS</h4>
        </div>
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
@import url('https://fonts.googleapis.com/css?family=Audiowide');

h1{font-family:'Audiowide'}

header {
    padding: 15px;
    display: flex;
    justify-content: space-around;
    background-color: #74b5e0;

    
}
a {
    color:white;
    margin:40px;
    font-weight:900;
    text-decoration: none;
    letter-spacing: 2px;}
a:hover {
    color:#2c3e50;
    font-weight:900;
    text-decoration: none;
    letter-spacing: 2px;
    }
.logo{
    display:block;
    }
</style>
