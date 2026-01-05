import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'site',
    redirect: {name: 'home'},
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router