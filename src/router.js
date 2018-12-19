import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Profiles from './components/profiles/Profiles';
import About from './components/about/About';
import Artists from './components/search/Artists';
import Artist from './components/artists/Artist';


export default new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/artist-detail', component: Artist },
    { path: '/profile', component: Profiles },
    { path: '/about-us', component: About },
    { path: '/search', component: Artists },
    { path: '*', redirect: '/' }
  ]
});