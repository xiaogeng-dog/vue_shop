import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  window.sessionStorage.getItem('token') ? next() : next('/login')
})

export default router
