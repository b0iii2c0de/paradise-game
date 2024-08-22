<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterView, useRoute } from 'vue-router';
  import { Header } from '@/widgets/header';
  import { Footer } from '@/widgets/footer';
  
  const count = ref(0);
  const route = useRoute();

  const updateCount = (newCount: number) => {
    count.value = newCount;
  };
</script>

<template>
  <div class="w-full h-full flex flex-col relative">
    <Header :count="count" v-if="route.path !== '/'" />
    <div class="flex flex-grow flex-shrink w-full h-full min-h-0 justify-center">
      <RouterView @update-count="updateCount"/>
    </div>
    <Footer v-if="route.path !== '/'" />
  </div>
</template>
