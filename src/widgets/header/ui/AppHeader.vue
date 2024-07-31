<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import IconLogo from '@/shared/assets/icons/IconLogo.vue';
  import IconButton from '@/shared/assets/icons/IconButton.vue';
  
  defineProps<{
    count: number;
  }>();  
</script>

<template>
  <header class="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[413px] z-20 bg-background">
    <div class="p-[13px] flex flex-row justify-between items-center">
      <RouterLink to="/play" class="active:scale-95 transition-transform pl-1">
        <IconLogo />
      </RouterLink>

      <RouterLink to="/wallet" class="active:scale-95 transition-transform pl-1">
        <div class="bg-primary-foreground px-2 py-[2px] rounded-full flex items-center gap-2">
          <span class="font-semibold">{{ count }}</span>
          <IconButton class="w-[18px] h-[18px]" />
        </div>
      </RouterLink>
    </div>

    <!-- полоска -->
    <div class="h-px bg-primary-foreground"></div>
  </header>
</template>

<style scoped>

</style>