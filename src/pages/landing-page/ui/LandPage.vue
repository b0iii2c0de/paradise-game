<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from '@/shared/ui/carousel'
  import { Button } from '@/shared/ui/button';
  import { 
    IconOA, 
    IconXrp, 
    IconUnreal, 
    IconEpic, 
    IconPlayfab, 
    IconArrowUpRight, 
    IconButton, 
    IconLogo 
  } from '@/shared/assets/icons/';

  const currentSlide = ref(0);
  const router = useRouter();

  const nextSlide = () => {
    if (currentSlide.value < 2) {
      currentSlide.value++;
    } else {
      router.push('/');
    }
  };

</script>

<template>
  <div class="bg-img_landing px-4 flex flex-col h-full">
    <Carousel v-model="currentSlide">
      <CarouselContent>
        <CarouselItem class="flex flex-col items-center justify-between h-full">
          <div class="max-w-[169px] w-full mt-[115px]">
            <IconLogo class="w-full h-auto max-h-[55px]" />
          </div>
          

          <h2 class="font-semibold text-center text-xl mt-3">REAL WORLD SIMULATION GAME</h2>
          <h2 class="font-semibold text-xl mt-[-2px]">BASED ON AI</h2>

          <!-- Трейлер -->
          <div class="w-full h- px-4 mt-7 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/QdBZY2fkU-0"
              title="Game Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="w-full aspect-video rounded-2xl"
            ></iframe>
          </div>

          <!-- Иконки -->
          <div class="flex flex-row items-center justify-center gap-10 mt-4">
            <IconOA />
            <IconXrp />
            <IconUnreal class="w-[33px] h-[35px]" />
            <IconEpic class="w-[33px] h-[35px]" />
            <IconPlayfab />
          </div>
        </CarouselItem>
        <CarouselItem>
          <h2 class="font-semibold text-2xl">Play & Earn Real Money</h2>

          <IconButton />
          <!-- тень монетки -->
          <div class="absolute -bottom-[40px] left-1 right-1 h-[10px] bg-violet-400/30 blur-lg rounded-full z-0"></div>

          <p class="font-semibold text-2xl">
            <span class="text-primary-buttonBg font-semibold text-2xl">1 $PAR</span> = 0.00001 USDT
          </p>
          <p class="text-sm text-muted-foreground">Connect your wallet and get the rewards</p>
        </CarouselItem>
        <CarouselItem>
          <h2 class="font-semibold text-2xl">Game Launch</h2>
          <p class="font-semibold">EARN THE <span class="text-primary-buttonBg font-semibold">$PAR TOKEN</span> AND BE A PART OF THE <span class="text-primary-buttonBg font-semibold">PARADISE GAME&reg;</span></p>
          
          <Button variant="link" class="bg-foreground border-[3px] border-background/70">
            <span class="text-sm text-primary-foreground font-semibold pr-2">Read more</span>
            <IconArrowUpRight />
          </Button>

          <!-- GIF -->
          <div class="px-3 py-3">
            <img src="@/shared/assets/images/car.gif" alt="car" class="w-full h-full rounded-2xl">
          </div>
        </CarouselItem>
      </CarouselContent>
      <!-- <CarouselPrevious />
      <CarouselNext /> -->
    </Carousel>

    <!-- Три полоски над кнопкой -->
    <div class="flex flex-row justify-center items-center gap-3 mt-14">
      <div class="w-[55px] h-[3px] bg-primary-buttonBg rounded-full"></div>
      <div class="w-[55px] h-[3px] bg-neutral-700 rounded-full"></div>
      <div class="w-[55px] h-[3px] bg-neutral-700 rounded-full"></div>
    </div>
    
    <div class="mt-5 px-1">
      <Button @click="nextSlide" class="bg-primary-buttonBg hover:bg-fuchsia-400/70 w-full rounded-2xl h-14" size="lg">
        <span class="text-foreground font-semibold text-lg">Next</span>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.bg-img_landing {
  width: 413px;
  height: 500%;
  background-image: url('@/shared/assets/images/Landing.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center -2px;
}
</style>