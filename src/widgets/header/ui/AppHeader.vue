<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import {
    IconLogo,
    IconButtonOpt,
  } from '@/shared/assets/icons/index';
  
  defineProps<{
    count: number;
  }>();  
</script>

<template>
    <div class="p-[13px] flex justify-between items-center">
      <IconLogo />

      <RouterLink to="/wallet" class="active:scale-95 transition-transform pl-1">
        <div class="bg-primary-foreground px-2 py-[2px] rounded-full flex items-center gap-2">
          <span class="font-semibold">{{ count }}</span>
          <IconButtonOpt class="w-[18px] h-[18px]" />
        </div>
      </RouterLink>
    </div>

    <!-- полоска -->
    <div class="h-px bg-primary-foreground"></div>
</template>

<style scoped>

</style>