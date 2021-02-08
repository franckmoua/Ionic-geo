import { createRouter, createWebHistory } from '@ionic/vue-router';

import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'town',
        component: () => import('@/views/Town.vue')
      },
      {
        path: 'department',
        component: () => import('@/views/Department.vue')
      },
      {
        path: 'area',
        component: () => import('@/views/Area.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
