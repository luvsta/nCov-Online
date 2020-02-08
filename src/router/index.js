import Vue from 'vue'
import Router from 'vue-router'

// 注入组件
// import HomePage from '../components/HomePage/index.vue';

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: resolve => (require(["../components/HomePage/index.vue"], resolve))
    }
  ]
})
