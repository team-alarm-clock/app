<template>
  <div id="app">
   <header>
     <span  v-if="user">
       <h2>Hello {{user.username}} </h2>
      </span>
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

export default {
  data() {
    return {
      result: null,
      user: null
    };
  },
  components: {
    Auth
  },
  created() {
    const json = window.localStorage.getItem('profile');
    if(json) {
      this.setUser(JSON.parse(json));
    // api.test()
    //   .then(result => this.result = result);
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
}
</style>
