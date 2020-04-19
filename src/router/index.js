import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about', // 关于我们
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/join', // 加入我们
    name: 'Join',
    component: () => import('../views/Join.vue')
  },
  {
    path: '/cooperation', //合作
    name: 'Cooperation',
    component: () => import('../views/Cooperation.vue')
  },
  {
    path: '/contactUs', // 联系我们
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/solution', // 解决方案
    name: 'Solution',
    component: () => import('../views/Solution.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
