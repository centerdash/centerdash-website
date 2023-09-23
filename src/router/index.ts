import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home - CenterDash'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login - CenterDash'
      }
    }
  ]
})

router.beforeEach((toRoute, _, next) => {
  window.document.title = toRoute.meta.title ? String(toRoute.meta.title) : 'CenterDash'

  next()
})

export default router
