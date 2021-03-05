import 'bulma/css/bulma.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('truncate', (text, stop, clamp = '...') => {
  return text.slice(0, stop) + (stop < text.length ? clamp : '');
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
