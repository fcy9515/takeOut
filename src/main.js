// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods';
import comment from 'components/comment/comment';
import seller from 'components/seller/seller';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    routes:
      [
        {
          path: '/goods', component: goods
        },
        {
          path: '/comment', component: comment
        },
        {
          path: '/seller', component: seller
        }
      ]
  }
  )
;
/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app');
/* router.push('/goods'); */
