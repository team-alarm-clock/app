import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Profile from './components/profiles/Profile';
import About from './components/about/About';
import Artists from './components/artists/Artists';
import Artist from './components/artists/Artist';


export default new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/artist-detail', component: Artist },
    { path: '/profile', component: Profile },
    { path: '/about-us', component: About },
    { path: '/search', component: Artists },
    { path: '*', redirect: '/' }
  ]
});