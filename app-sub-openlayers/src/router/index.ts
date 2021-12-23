import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/base',
    name: 'Base',
    component: () => import(/* webpackChunkName: "Base" */ '../views/base/index.vue'),
    children: [
      {
        path: 'start',
        name: 'Start',
        meta: {
          title: '开始'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/base/start/index.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/base/start/index.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
