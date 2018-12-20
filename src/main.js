import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import router from './router';
import './main.css';
// import fontawesome from '@fortawesome/fontawesome';
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
// import falight from '@fortawesome/fontawesome-pro-light';
// import fasolid from '@fortawesome/fontawesome-pro-solid';

// fontawesome.library.add(falight, fasolid);

// Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
