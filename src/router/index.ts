import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/history',
      name: 'History',
      component: HistoryView
    },
    {
      path: '/movie/:id',
      name: 'Movie Detail',
      component: DetailView
    },
  ]
})

export default router
