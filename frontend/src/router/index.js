import { createRouter, createWebHistory } from 'vue-router'
import SiteLayout from '../views/SiteLayout.vue'
import HomeView from '../views/HomeView.vue'
import HousePage from '../views/HousePage.vue'

const routes = [
  {
    path: '/',
    name: 'site',
    component: SiteLayout,
    redirect: {name: 'home'},
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/house/:id',
        name: 'house',
        component: HousePage,
        props: true
      }
      // {
      //   path: '/create-house',
      //   name: 'create-house',
      //   component: CreateHouse
      // },
      // {
      //   path: '/house-edit/:id',
      //   name: 'house-edit',
      //   component: HouseEdit
      // },
      // {
      //   path: '/:pathMatch(.*)*',
      //   name: 'notfound',
      //   component: NotFound
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router