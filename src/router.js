import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BaiduHome from './views/BaiduHome.vue'
import BiaoyansuBlog from './views/BiaoyansuBlog.vue'
import BiaoyansuShop from './views/BiaoyansuShop.vue'

import Layout from './views/Layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/biaoyansuBlog',
      name: 'biaoyansuBlog',
      component: BiaoyansuBlog
    },
    {
      path:'/biaoyansuShop',
      name: 'biaoyansuShop',
      component: BiaoyansuShop
    },    
    {
      path: '/baiduHome',
      name: 'baiduHome',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BaiduHome
    },
    {
      path: '/Layout',
      name: 'layout',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Layout
    }    
  ]
})
