
import { createRouter, createWebHistory } from 'vue-router'
 
const routerHistory = createWebHistory()
 
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('../views/index.vue')
    },
    {
      path: '/helloWorld',
      component: () => import('../views/helloWorld.vue')
    }
  ]
})
export default router
