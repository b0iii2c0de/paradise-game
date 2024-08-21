import { createRouter, createWebHistory } from 'vue-router'

import { LandPage } from '@/pages/landing-page';
import { PlayPage } from '@/pages/play-page';
import { TasksPage } from '@/pages/tasks-page';
import { FriendsPage } from '@/pages/friends-page';
import { WalletPage } from '@/pages/wallet-page';
import { AboutPage } from '@/pages/about-page';

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
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksPage
    },
    {
      path: '/friends',
      name: 'friends',
      component: FriendsPage
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
})

export default router