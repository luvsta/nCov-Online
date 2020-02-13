import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: resolve => (require(["../components/HomePage/index.vue"], resolve).default)
    }, {
      path: '/ex',
      name: 'expent',
      component: resolve => (require(["../components/expentd.vue"], resolve))
    }
  ]
})
