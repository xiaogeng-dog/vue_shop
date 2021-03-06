import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'

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
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          component: () => import('@/components/Welcome')
        },
        {
          path: '/users',
          component: () => import('@/components/user/Users')
        },
        {
          path: '/rights',
          component: () => import('@/components/power/Rights')
        },
        {
          path: '/roles',
          component: () => import('@/components/power/Roles')
        },
        {
          path: '/categories',
          component: () => import('@/components/goods/Category')
        },
        {
          path: '/params',
          component: () => import('@/components/goods/Params')
        },
        {
          path: '/goods',
          component: () => import('@/components/goods/List')
        },
        {
          path: '/goods/add',
          component: () => import('@/components/goods/Add')
        },
        {
          path: '/orders',
          component: () => import('@/components/order/Order')
        },
        {
          path: '/reports',
          component: () => import('@/components/report/Report')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  window.sessionStorage.getItem('token') ? next() : next('/login')
})

export default router
