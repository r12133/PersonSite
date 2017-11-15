import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/dist/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/components/index'],resolve)
    },
    {
        path: '/parrelex',
        name: 'parrelex',
        component: resolve => require(['@/components/parrelex'],resolve)
    },
    {
      path: '/smart',
      name: 'smart',
      component: resolve => require(['@/components/smart'],resolve)
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: resolve => require(['@/components/aboutme'],resolve)
    }
  ]
})