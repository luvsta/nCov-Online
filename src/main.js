// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Icon, Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入store树
import store from './store.js'
// import echarts from 'echarts'
// import vueiinfinite from 'vue-infinite-scroll'
// Vue.use(vueiinfinite)
Vue.config.productionTip = false

// Element
Vue.component(Icon.name, Icon);
Vue.use(Loading.directive);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
