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
  <Header :count="count" v-if="route.path !== '/'" />
  <div class="flex justify-center items-center">
    <!-- <PlayPage @update-count="updateCount"/> -->
    <RouterView @update-count="updateCount"/>
  </div>
  <Footer v-if="route.path !== '/'" />
</template>
