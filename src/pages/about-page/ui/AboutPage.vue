<script setup lang="ts">
  import { IconArrowUpRight } from '@/shared/assets/icons';
  import { Button } from '@/shared/ui/button';
</script>

<template>
   <div class="flex flex-col justify-center items-center w-full max-w-[413px] h-full max-h-[34.3rem] mt-12 px-4">
    <div class="overflow-auto w-full -mb-[80px] custom-scrollbar">
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