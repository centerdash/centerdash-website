import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta.title ? String(toRoute.meta.title) : 'CenterDash'

  next()
})

export default router
