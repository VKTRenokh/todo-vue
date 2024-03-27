import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/todo',
    component: () => import('@/views/todo.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
