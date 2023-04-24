//import { createRouter, createWebHistory } from 'vue-router'

//const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL), //process.env.BASE_URL
//   routes: [
//      {
//         path: '/',
//         name: 'home',
//         component: () => import('../pages/home-page/HomePage.vue')
//      },
//      {
//         path: '/login',
//         name: 'login',
//         component: () => import('../pages/LoginPage.vue')
//      }
//   ]
//})

//router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) { // && !store.getters['auth/token']
//      next('/login');
//   } else if (to.meta.requiresUnauth) { // && !!store.getters['auth/token']
//      next('/');
//   } else {
//      next();
//   }
//});

//export default router
