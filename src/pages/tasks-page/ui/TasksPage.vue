<script setup lang="ts">
  import { ref } from 'vue'
  import type { Task } from '@/entities/tasks'
  import { 
    IconTelegram,
    IconX,
    IconDiscord,
    IconYouTube,
    IconWeb,
    IconXWar,
    IconXrp,
    IconCG,
    IconCMC,
    IconArrowRight
  } from '@/shared/assets/icons'
  import { Button } from '@/shared/ui/button'


    /**
   * TODO: Рефакторинг по Feature-Sliced Design
   * 1. Создать директорию src/features/taskManagement
   * 2. Вынести логику управления задачами в model/store.ts
   * 3. Создать хук useTaskManagement в lib/useTaskManagement.ts
   * 4. Вынести отображение списка задач в ui/TaskList.vue
   * 5. Обновить TasksPage.vue, импортировав и используя новые модули
   * 6. Проверить и обновить импорты в других компонентах при необходимости
   */

  const iconMap = {
    telegram: IconTelegram,
    x: IconX,
    discord: IconDiscord,
    youtube: IconYouTube,
    web: IconWeb,
    xwar: IconXWar,
    xrp: IconXrp,
    cg: IconCG,
    cmc: IconCMC,
  }

  const tasksToDo = ref<Task[]>([
    {
      id: 1,
      icon: '👋🏻',
      title: 'Daily visit',
      reward: 5000,
      completed: false,
      claimable: false,
    },
    {
      id: 2,
      icon: 'telegram',
      title: 'Subscribe to the Telegram channel',
      reward: 25000,
      completed: false,
    },
    {
      id: 3,
      icon: 'telegram',
      title: 'Join our Telegram chat',
      reward: 25000,
      completed: false,
    },
    {
      id: 4,
      icon: 'x',
      title: 'Subscribe to the X (Twitter)',
      reward: 25000,
      completed: false,
    },
    {
      id: 5,
      icon: 'discord',
      title: 'Join our Discord',
      reward: 25000,
      completed: false,
    },
    {
      id: 6,
      icon: 'youtube',
      title: 'Subscribe to our YouTube',
      reward: 25000,
      completed: false,
    },
    {
      id: 7,
      icon: 'x',
      title: 'RT and Like the pinned post on X',
      reward: 25000,
      completed: false,
    },
    {
      id: 8,
      icon: 'x',
      title: 'RT and Like a post on X',
      reward: 25000,
      completed: false,
    },
    {
      id: 9,
      icon: 'web',
      title: 'Visit the website',
      reward: 10000,
      completed: false,
    },
    {
      id: 10,
      icon: 'youtube',
      title: 'Watch the trailer to the end, like it.',
      reward: 25000,
      completed: false,
    },
    {
      id: 11,
      icon: 'xwar',
      title: 'Join X-WAR',
      reward: 50000,
      completed: false,
    },
    {
      id: 12,
      icon: '👴🏼',
      title: 'Join DADDY',
      reward: 50000,
      completed: false,
    },
    {
      id: 13,
      icon: 'xrp',
      title: 'Add an XRP wallet',
      reward: 100000,
      completed: false,
    },
    {
      id: 14,
      icon: 'xrp',
      title: 'Add Trustline',
      reward: 200000,
      completed: false,
    },
    {
      id: 15,
      icon: 'cg',
      title: 'Add $PAR to Wishlist on CoinGecko',
      reward: 25000,
      completed: false,
    },
    {
      id: 16,
      icon: 'cmc',
      title: 'Add $PAR to Wishlist on CoinMarketCap, join the community',
      reward: 50000,
      completed: false,
    },
    {
      id: 17,
      icon: 'telegram',
      title: 'Subscribe to the XRP news',
      reward: 25000,
      completed: false,
    },
  ])

</script>

<template>
  <div class="flex flex-col justify-center w-full max-w-[413px] h-auto mt-[4.5rem] px-4">
    <div class="flex flex-col sticky top-[3.3rem] z-10 bg-background border-t-red-700">
      <h2 class="font-semibold xs:text-2xl text-xl">Tasks to do <span class="xs:text-xl text-lg">👋🏻</span></h2>
      <p class="font-semibold text-muted-foreground xs:text-base text-sm">Finish these tasks to get more tokens.</p>
    </div>
    <div 
      v-for="task in tasksToDo" 
      :key="task.id"
      class="px-3 flex flex-col overflow-y-auto flex-grow gap-2 mt-3"
    >
      <button class="flex flex-row justify-between items-center gap-2 py-3 px-2 rounded-lg bg-card hover:bg-card-hover transition-colors">
        <component :is="iconMap[task.icon as keyof typeof iconMap]" v-if="task.icon in iconMap" />
        <span v-else>{{ task.icon }}</span>
        <span class="text-wrap text-left">{{ task.title }}</span>
        <span>{{ task.reward }}</span>
        <IconArrowRight class="text-primary-buttonBg" />
      </button>
      
    </div>
  </div>
</template>

<style scoped>

</style>