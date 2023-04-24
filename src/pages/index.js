import Routing from './index.vue'

export const routes = [
   {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home-page/HomePage.vue')
   },
   {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage.vue')
   }
]

export { Routing }