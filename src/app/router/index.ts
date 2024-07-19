import { createRouter, createWebHistory } from 'vue-router'

import { LandPage } from '@/pages/landing-page';
import { PlayPage } from '@/pages/play-page';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandPage
    },
    {
      path: '/play',
      name: 'play',
      component: PlayPage
    }
  ]
})

export default router
