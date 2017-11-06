import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }
  ]
})
