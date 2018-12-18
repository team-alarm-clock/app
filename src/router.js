import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Profiles from './components/profiles/Profiles';
import About from './components/about/About';
import Artists from './components/search/Artists.vue';


export default new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/artist-detail', component: Artists },
    { path: '/profile', component: Profiles },
    { path: '/about-us', component: About },
    { path: '/search', component: Artists },
    { path: '*', redirect: '/' }
  ]
});