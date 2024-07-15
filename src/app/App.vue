<script setup lang="ts">
  import { ref } from 'vue';
  import { Header } from '@/widgets/header';
  import { Footer } from '@/widgets/footer';
  import { PlayPage } from '@/pages/play-page';
  
  const count = ref(0);

  const updateCount = (newCount: number) => {
    count.value = newCount;
  };
</script>

<template>
  <Header :count="count" />
  <div class="flex justify-center items-center">
    <PlayPage @update-count="updateCount"/>  
  </div>
  <Footer />
</template>
