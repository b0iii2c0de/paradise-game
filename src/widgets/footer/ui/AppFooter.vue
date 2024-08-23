<script setup lang="ts">
  import { RouterLink, useRoute } from 'vue-router';
  import { ref, computed } from 'vue';
  import { 
    IconPlay,
    IconTasks, 
    IconFriends,
    IconWallet,
    IconPortal,
  } from '@/shared/assets/icons';

  const route = useRoute();
  const navRef = ref<HTMLElement | null>(null)
  // const currentRoute = computed(() => route.path)
  const currentRoute = computed(() => route.path.replace('/paradise-game', ''))
 

  /**
   * Вычисляет стиль для индикатора активной вкладки в навигации.
   * 
   * @returns {Object} Объект стилей для индикатора.
   * 
   * Функция выполняет следующие шаги:
   * 1. Проверяет наличие ссылки на навигационный элемент.
   * 2. Получает все дочерние элементы навигации.
   * 3. Находит индекс текущего активного элемента на основе текущего маршрута.
   * 4. Если активный элемент не найден, возвращает пустой объект стилей.
   * 5. Получает размеры и позицию активного элемента.
   * 6. Вычисляет ширину и положение индикатора относительно навигационного элемента.
   * 7. Возвращает объект с шириной и трансформацией для позиционирования индикатора.
   */
  const indicatorStyle = computed(() => {
    if (!navRef.value) return {}
    const items = Array.from(navRef.value.children) as HTMLElement[]
    // const currentIndex = items.findIndex(item => item.getAttribute('href') === currentRoute.value)
    const currentIndex = items.findIndex(item => item?.getAttribute('href')?.replace('/paradise-game', '') === currentRoute.value)
    if (currentIndex === -1) return {}
    const item = items[currentIndex]
    const { width, left } = item.getBoundingClientRect()
    const navLeft = navRef.value.getBoundingClientRect().left
    return {
      width: `${width}px`,
      transform: `translateX(${left - navLeft}px)`
    }
  });
</script>

<template>
    <!-- фиолетовая полоска поверх -->
    <div class="h-px bg-primary-foreground relative">
      <div class="absolute bottom-0 left-0 h-full bg-fuchsia-400/70 transition-all duration-300"
      :style="indicatorStyle">
      </div>
    </div>

    <!-- навигация -->
    <div class="flex flex-col items-center py-2">
      <nav ref="navRef" class="flex items-center justify-between w-full px-8 sm:px-6">
        <RouterLink to="/play" class="flex flex-col items-center gap-3" :class="{ 'text-fuchsia-400': currentRoute === '/play' }">
          <IconPlay class="w-7 h-auto" :class="{ 'text-fuchsia-400': currentRoute === '/play' }" />
          <span class="font-semibold text-xs sm:text-sm" :class="{ 'text-fuchsia-400/70': currentRoute === '/play' }">Play</span>
        </RouterLink>
        <RouterLink to="/tasks" class="flex flex-col items-center" :class="{ 'text-fuchsia-400': currentRoute === '/tasks' }">
          <IconTasks class="w-auto h-7" :class="{ 'text-fuchsia-400': currentRoute === '/tasks' }" />
          <span class="font-semibold text-xs sm:text-sm mt-1" :class="{ 'text-fuchsia-400/70': currentRoute === '/tasks' }">Tasks</span>
        </RouterLink>
        <RouterLink to="/friends" class="flex flex-col items-center justify-center gap-2 pt-1" :class="{ 'text-fuchsia-400': currentRoute === '/friends' }">
          <IconFriends class="w-9 h-auto" :class="{ 'text-fuchsia-400': currentRoute === '/friends' }" />
          <span class="font-semibold text-xs sm:text-sm" :class="{ 'text-fuchsia-400/70': currentRoute === '/friends' }">Friends</span>
        </RouterLink>
        <RouterLink to="/wallet" class="flex flex-col items-center" :class="{ 'text-fuchsia-400': currentRoute === '/wallet' }">
          <IconWallet class="w-7 h-7" :class="{ 'text-fuchsia-400': currentRoute === '/wallet' }" />
          <span class="font-semibold text-xs sm:text-sm mt-2" :class="{ 'text-fuchsia-400/70': currentRoute === '/wallet' }">Wallet</span>
        </RouterLink>
        <RouterLink to="/portal" class="flex flex-col items-center" :class="{ 'text-fuchsia-400': currentRoute === '/portal' }">
          <IconPortal class="w-7 h-7" :class="{ 'text-fuchsia-400': currentRoute === '/portal' }" />
          <span class="font-semibold text-xs sm:text-sm mt-2" :class="{ 'text-fuchsia-400/70': currentRoute === '/portal' }">Portal</span>
        </RouterLink>
      </nav>
    </div>
</template>