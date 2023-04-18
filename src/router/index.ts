import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/draft/'
  },
  // {
  //   path: '/folder/:id',
  //   component: () => import ('../views/FolderPage.vue')
  // }
  {
    path: '/draft/',
    component: () => import('@/views/DraftPage.vue')
  },
  {
    path: '/stash/',
    component: () => import('@/views/StashPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
