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
  <div class="w-full h-full flex flex-col items-center overflow-hidden">
    <header class="w-full max-w-xl flex-col">
      <Header :count="count" v-if="route.path !== '/'" />
    </header>
    <RouterView @update-count="updateCount" />
    <footer class="w-full max-w-xl flex-col pb-2">
      <Footer v-if="route.path !== '/'" />
    </footer>
  </div>
</template>
