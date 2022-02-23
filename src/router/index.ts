import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainPage from "@/page/main/MainPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/index.html',
    redirect: '/main',
    alias:"/"
  },
  {
    path: '/main',
    component: MainPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
