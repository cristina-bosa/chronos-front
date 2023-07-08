import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/error/NotFoundView.vue'
import SignUpView from '../views/auth/SignUpView.vue'
import SignInView from '../views/auth/SignInView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundView",
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
