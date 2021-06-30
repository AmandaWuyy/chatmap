import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/login'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/findings'
      },
      {
        path: 'findings',
        component: () => import('@/views/findings.vue')
      },
      {
        path: 'maps',
        name: 'maps',
        component: () => import('@/views/maps.vue'),
        children: [{
            path: 'checkin',
            name: 'CheckIn',
            component: () => import('@/views/components/checkIn.vue'),
          }]
      },
      {
        path: 'me',
        component: () => import('@/views/me.vue')
      },
      {
        path: 'login',
        component: () => import('@/views/user/Login.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
