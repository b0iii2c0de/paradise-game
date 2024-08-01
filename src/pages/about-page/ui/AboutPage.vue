<script setup lang="ts">
  import { ref } from 'vue';
  import { 
    IconArrowUpRight,
    IconCheckmark,
  } from '@/shared/assets/icons';
  import { Button } from '@/shared/ui/button';

  const roadMapItems = ref([
    { text: 'Development of PARADISE', completed: true },
    { text: 'Establishment of social media and community', completed: true },
    { text: 'IDO', completed: false },
    { text: 'Game Release', completed: false },
    { text: 'Global Marketing', completed: false }
  ])
</script>

<template>
   <div class="flex flex-col justify-center items-center w-full max-w-[430px] h-full max-h-[35.8rem] mt-12 px-4">
    <div class="overflow-auto -mb-[80px] custom-scrollbar">
      <!-- Трейлер -->
      <div class="w-full h-auto mt-7 xs:mb-0 aspect-video">
        <iframe
          src="https://www.youtube.com/embed/QdBZY2fkU-0"
          title="Game Trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-full aspect-video rounded-2xl"
        ></iframe>
      </div>

      <div class="flex flex-col items-center justify-center">
        <p class="text-muted-foreground font-normal xs:text-base text-sm !leading-tight mt-7">
          PARADISE®, developed by <span class="text-primary-buttonBg font-normal xs:text-base text-sm">U.Ground</span>, 
          is an online WEB3 game that blends the best aspects of GTA6® 
          and SIMS® with sophisticated AI technology.
        </p>

        <p class="text-muted-foreground font-normal xs:text-base text-sm !leading-tight mt-6">
          This game features an expansive, 
          hyper-realistic open world where players can interact with AI-driven NPCs 
          and influencers, mirroring real-world behaviors and activities. 
          As a WEB3 game, it provides a rich, 
          interactive platform for players to explore, 
          communicate, and make purchases, 
          setting a new standard in immersive online gaming.
        </p>
      </div>

      <div class="mt-8 w-full max-w-[16.4rem]">
        <Button
          size="xl"
          class="w-full bg-foreground border-[3px] border-background/70 !rounded-[0.5rem] active:scale-95 transition-transform"
        >
          <p class="text-sm xs:text-base text-primary-foreground font-semibold pr-[1rem]">Official Website</p>
          <IconArrowUpRight />
        </Button>
      </div>

      <h2 class="mt-9 font-semibold xs:text-xl text-lg">Roadmap</h2>
      <div class="mt-5 flex flex-col relative">
        <div class="w-1 h-full border-l border-dashed border-muted-foreground/50 absolute top-0 left-[9px] z-0"></div>
        <ul class="z-10 flex flex-col gap-4">
          <li v-for="(item, index) in roadMapItems" :key="index" class="flex flex-row justify-start items-center gap-3">
            <IconCheckmark 
              class="w-5 h-5" 
              :class="{ 'text-primary-buttonBg': item.completed, 'text-muted-foreground': !item.completed }"
            />
            <p 
              class="font-normal xs:text-base text-sm !leading-tight"
              :class="{ 'text-muted-foreground': item.completed }"
            >
              {{ item.text }}
            </p>
          </li>
        </ul>
      </div>

      <h2 class="mt-9 font-semibold xs:text-xl text-lg">$PAR Token Usage</h2>
      <div class="flex flex-col items-center justify-center mt-5 pb-5">
        <p class="text-muted-foreground font-normal xs:text-base text-sm !leading-tight">
          The $PAR token is used for in-game transactions (buying cars, 
          real estate, weapons, items, etc.)
        </p>

        <p class="text-muted-foreground font-normal xs:text-base text-sm !leading-tight mt-6">
          You will be able to exchange $PAR token for XRPL DEX 
          (<span class="text-primary-buttonBg font-normal xs:text-base text-sm">xmagnetic.org</span> platform) for real money. 
          You will be able to exchange your in-game points for $PAR.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .custom-scrollbar {
    overflow-y: overlay;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 0px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
</style>