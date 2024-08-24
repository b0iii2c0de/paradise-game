<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { Task } from '@/entities/tasks'
  import {
    IconBgPurple,
    IconBgGreen,
    IconTelegram,
    IconX,
    IconDiscord,
    IconYouTube,
    IconWeb,
    IconXWar,
    IconXrp,
    IconCG,
    IconCMC,
    IconArrowRight,
    IconButtonOpt,
    IconHand,
    IconDad,
    IconCross
  } from '@/shared/assets/icons'
  import { Button } from '@/shared/ui/button'
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
  } from '@/shared/ui/alert-dialog'

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
    hand: IconHand,
    daddy: IconDad,
    bgPurple: IconBgPurple,
    bgGreen: IconBgGreen
  }

  const tasksToDo = ref<Task[]>([
    {
      id: 1,
      icon: 'hand',
      title: 'Daily visit',
      reward: 5000,
      completed: false,
      claimable: true
    },
    {
      id: 2,
      icon: 'telegram',
      title: 'Subscribe to the Telegram channel',
      reward: 25000,
      completed: false
    },
    {
      id: 3,
      icon: 'telegram',
      title: 'Join our Telegram chat',
      reward: 25000,
      completed: false
    },
    {
      id: 4,
      icon: 'x',
      title: 'Subscribe to the X (Twitter)',
      reward: 25000,
      completed: false
    },
    {
      id: 5,
      icon: 'discord',
      title: 'Join our Discord',
      reward: 25000,
      completed: false
    },
    {
      id: 6,
      icon: 'youtube',
      title: 'Subscribe to our YouTube',
      reward: 25000,
      completed: false
    },
    {
      id: 7,
      icon: 'x',
      title: 'RT and Like the pinned post on X',
      reward: 25000,
      completed: false
    },
    {
      id: 8,
      icon: 'x',
      title: 'RT and Like a post on X',
      reward: 25000,
      completed: false
    },
    {
      id: 9,
      icon: 'web',
      title: 'Visit the website',
      reward: 10000,
      completed: false
    },
    {
      id: 10,
      icon: 'youtube',
      title: 'Watch the trailer to the end, like it',
      reward: 25000,
      completed: false
    },
    {
      id: 11,
      icon: 'xwar',
      title: 'Join X-WAR',
      reward: 50000,
      completed: false
    },
    {
      id: 12,
      icon: 'daddy',
      title: 'Join DADDY',
      reward: 50000,
      completed: false
    },
    {
      id: 13,
      icon: 'xrp',
      title: 'Add an XRP wallet',
      reward: 100000,
      completed: false
    },
    {
      id: 14,
      icon: 'xrp',
      title: 'Add Trustline',
      reward: 200000,
      completed: false
    },
    {
      id: 15,
      icon: 'cg',
      title: 'Add $PAR to Wishlist on CoinGecko',
      reward: 25000,
      completed: false
    },
    {
      id: 16,
      icon: 'cmc',
      title: 'Add $PAR to Wishlist on CoinMarketCap, join the community',
      reward: 50000,
      completed: false
    },
    {
      id: 17,
      icon: 'telegram',
      title: 'Subscribe to the XRP news',
      reward: 25000,
      completed: false
    }
  ])

  const purpleBackgroundIcons = ['hand', 'daddy', 'youtube', 'web', 'xwar', 'xrp']
  const getIconBackground = (icon: string) => {
    return purpleBackgroundIcons.includes(icon) ? iconMap.bgPurple : iconMap.bgGreen
  }
</script>

<template>
    <div class="flex-shrink w-full max-w-xl h-full min-h-0 overflow-auto overflow-x-hidden relative" style="transform:translateZ(0);-webkit-overflow-scrolling:touch">
    <!-- список задач -->
    <div class="flex flex-col px-4 pb-3 gap-3">
      <div class="flex flex-col mt-6 mb-2">
        <h2 class="font-semibold xs:text-[1.4rem] text-xl">
          Tasks to do <span class="xs:text-xl text-lg">👋🏻</span>
        </h2>
        <p class="font-normal text-muted-foreground xs:text-base text-sm">
          Finish these tasks to get more tokens.
        </p>
      </div>

      <div v-for="task in tasksToDo" :key="task.id" class="active:scale-95 transition-transform">
        <div
          class="flex flex-row items-center gap-2 h-20 py-3 px-3 border-2 gradient-border rounded-2xl bg-neutral-800/40 hover:neutral-800/50 transition-colors"
        >
          <div
            class="relative border-2 !rounded-[0.5rem] w-14 h-14 flex flex-shrink-0 items-center justify-center p-3"
          >
            <component :is="getIconBackground(task.icon)" class="absolute w-14 h-14" />
            <component :is="iconMap[task.icon as keyof typeof iconMap]" class="z-10 w-7 h-7" />
          </div>

          <!-- почитай про flex-grow & flex-shrink и как они работают вместе -->
          <div class="flex flex-col gap-1 flex-grow overflow-hidden pl-3">
            <h2 class="font-semibold xs:text-base text-sm truncate">{{ task.title }}</h2>
            <div class="flex flex-row items-center gap-2">
              <IconButtonOpt class="w-5 h-5" />
              <span class="font-medium">{{ task.reward }}</span>
            </div>
          </div>

          <Button
            v-if="task.claimable"
            variant="secondary"
            size="sm"
            class="flex-shrink-0 bg-primary-buttonBg hover:bg-fuchsia-400/50 xs:w-[8.8rem] w-24 rounded-2xl"
          >
            <span class="font-semibold xs:text-base text-sm">CLAIM</span>
          </Button>
          <Button v-else variant="ghost" size="icon" class="flex-shrink-0 !rounded-2xl">
            <IconArrowRight class="w-auto h-4 text-primary-buttonBg" />
          </Button>
        </div>
      </div>
    </div>

    <!-- модалка -->
    <!-- v-model:open="isModalOpen" -->
    <AlertDialog>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogCancel class="absolute top-5 right-5 rounded-full bg-neutral-800">
            <IconCross />
          </AlertDialogCancel>
          <AlertDialogTitle>Announce</AlertDialogTitle>
          <AlertDialogDescription>
            We are announcing a drawing for the user who invites the most referrals!
          </AlertDialogDescription>
          <AlertDialogDescription class="text-fuchsia-400">
            We are increasing the award to 8,000 USDT for first place, 1,500 USDT for second place
            and 500 USDT for third place.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
    </div>
</template>

<style scoped>
  .gradient-border {
    border-image: var(--border-gradient) 1;
  }

  /* .icon-aura {
    position: relative;
    overflow: visible;
  }

  .icon-glow {
    filter: drop-shadow(0 0 4px currentColor);
  } */
</style>
