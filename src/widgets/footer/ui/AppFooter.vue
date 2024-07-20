<script setup lang="ts">
  import { RouterLink, useRoute } from 'vue-router';
  import { ref, computed } from 'vue';
  import IconPlay from '@/shared/assets/icons/IconPlay.vue';
  import IconTasks from '@/shared/assets/icons/IconTasks.vue';
  import IconFriends from '@/shared/assets/icons/IconFriends.vue';
  import IconWallet from '@/shared/assets/icons/IconWallet.vue';
  import IconAbout from '@/shared/assets/icons/IconAbout.vue';

  const route = useRoute();
  const navRef = ref<HTMLElement | null>(null)
  const currentRoute = computed(() => route.path) 

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
    const currentIndex = items.findIndex(item => item.getAttribute('href') === currentRoute.value)
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
  <footer class="w-full max-w-[413px] mx-auto">
    <!-- полоска -->
    <div class="mt-[94px] h-px bg-primary-foreground relative">
      <!-- фиолетовая полоска поверх -->
      <div class="absolute bottom-0 left-0 h-full bg-fuchsia-400/70 transition-all duration-300"
       :style="indicatorStyle">
      </div>
    </div>

    <!-- навигация -->
    <div class="flex flex-col items-center pt-2">
      <nav ref="navRef" class="flex items-center justify-between w-full px-8 sm:px-6">
        <RouterLink to="/play" class="flex flex-col items-center" :class="{ 'text-fuchsia-400': currentRoute === '/' }">
          <IconPlay class="w-7 h-7" :class="{ 'text-fuchsia-400': currentRoute === '/' }" />
          <span class="font-semibold text-xs sm:text-sm mt-2" :class="{ 'text-fuchsia-400/70': currentRoute === '/' }">Play</span>
        </RouterLink>
        <RouterLink to="/tasks" class="flex flex-col items-center" :class="{ 'text-fuchsia-400': currentRoute === '/tasks' }">
          <IconTasks class="w-7 h-7" :class="{ 'text-fuchsia-400': currentRoute === '/tasks' }" />
          <span class="font-semibold text-xs sm:text-sm mt-2" :class="{ 'text-fuchsia-400/70': currentRoute === '/tasks' }">Tasks</span>
        </RouterLink>
        <RouterLink to="/friends" class="flex flex-col items-center" :class="{ 'text-fuchsia-400': currentRoute === '/friends' }">
          <IconFriends class="w-7 h-7" :class="{ 'text-fuchsia-400': currentRoute === '/friends' }" />
          <span class="font-semibold text-xs sm:text-sm mt-2" :class="{ 'text-fuchsia-400/70': currentRoute === '/friends' }">Friends</span>
        </RouterLink>
        <RouterLink to="/wallet" class="flex flex-col items-center" :class="{ 'text-fuchsia-400': currentRoute === '/wallet' }">
          <IconWallet class="w-7 h-7" :class="{ 'text-fuchsia-400': currentRoute === '/wallet' }" />
          <span class="font-semibold text-xs sm:text-sm mt-2" :class="{ 'text-fuchsia-400/70': currentRoute === '/wallet' }">Wallet</span>
        </RouterLink>
        <RouterLink to="/about" class="flex flex-col items-center" :class="{ 'text-fuchsia-400': currentRoute === '/about' }">
          <IconAbout class="w-7 h-7" :class="{ 'text-fuchsia-400': currentRoute === '/about' }" />
          <span class="font-semibold text-xs sm:text-sm mt-2" :class="{ 'text-fuchsia-400/70': currentRoute === '/about' }">About</span>
        </RouterLink>
      </nav>
    </div>

  </footer>
</template>

<style scoped>

</style>