import Vue from 'vue';
import Dev from './serve.vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false;
const router = new VueRouter({
  routes:[], // short for `routes: routes`
  mode: 'history'
})

new Vue({
  router,
  render: (h) => h(Dev),
}).$mount('#app');
