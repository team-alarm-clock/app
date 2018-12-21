<template>
  <div id="app">
   <header>
     <nav v-if="user">
        <Header />
        <p id="logout"><a href="#" @click="handleLogout">LOGOUT</a></p>
     </nav>
     <span  v-if="user">
       <h2>Hello, {{user.username}}! </h2>
    </span>
   </header>
    <main>
        <RouterView v-if="user" :user="user" />
            <Auth v-else
            :onSignUp="handleSignUp"
            :onSignIn="handleSignIn" />
    </main>
   </div>
</template>

<script>
import api from '../services/api.js';
import Auth from './auth/Auth';
import Header from './shared/Header';
export default {
  data() {
    return {
      result: null,
      user: null
    };
  },
  components: {
    Auth,
    Header
  },
  created() {
    const json = window.localStorage.getItem('profile');
    if(json) {
      this.setUser(JSON.parse(json));

    }
  },

  methods: {
    handleSignUp(profile) {
      return api.signUp(profile)
        .then(user => {
          this.setUser(user);
          this.$router.push('/home');
        });
    },

    handleSignIn(credentials) {
      return api.signIn(credentials)
        .then(user => {
          this.setUser(user);
          this.$router.push('/home');
        });
    },

    setUser(user) {
      this.user = user;
      if(user) {
        api.setToken(user.token);
        window.localStorage.setItem('profile', JSON.stringify(user));
      }
      else {
        api.setToken();
        window.localStorage.removeItem('profile');
      }
    },

    handleLogout() {
      // TODO: tell api to forget token
      this.setUser(null);
      this.$router.push('/');
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logout { 
  position: absolute;
  top: 0;
  right: 0;
  margin-right:20px;
  background-color:#2c3e50;
}
#logout a{
  color:white;
  font-weight:600;
  text-decoration: none;
  letter-spacing: 2px;
  padding:5px;
 }
  #logout a:hover{
  color:white;
  font-weight:600;
  text-decoration: none;
  background-color: #74b5e0;
  padding:5px;
 }
 .halftone {  
  margin: 0;
  padding: 0;
  height:100%;
  position: relative;
  box-sizing: border-box;
  background-image:
    radial-gradient(
      circle,
      dodgerblue 85%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 80%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 75%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 70%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 65%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 60%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 55%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 50%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 45%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 40%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 35%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 30%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 25%,
      transparent 0
      ),
    radial-gradient(
      circle,
      dodgerblue 20%,
      transparent 0
      );  
  background-size: 1em 1em;
  background-repeat: repeat-x;
  background-position:
    0 13em, 
    0 12em, 
    0 11em, 
    0 10em, 
    0 9em, 
    0 8em,
    0 7em,
    0 6em,
    0 5em,
    0 4em,
    0 3em,
    0 2em,
    0 1em,
    0 0;
  }
</style>
