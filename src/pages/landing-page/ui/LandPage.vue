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
          
          <h2 class="font-semibold text-center mt-3 xs:text-xl text-lg">REAL WORLD SIMULATION GAME</h2>  
          <h2 class="font-semibold xs:text-xl text-lg mt-[-2px]">BASED ON AI</h2>

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
          <div class="flex flex-row items-center justify-between px-8 mt-4 max-w-[413px] w-full mx-auto">
            <IconOA />
            <IconXrp />
            <IconUnreal class="w-10 h-10" />
            <IconEpic class="w-8 h-9" />
            <IconPlayfab />
          </div>

        </CarouselItem>
        <CarouselItem class="flex flex-col items-center justify-between h-full">
          <h2 class="font-semibold xs:text-3xl text-2xl text-center mt-[7.2rem]">Play & Earn Real Money</h2>

          <div class="flex flex-col mt-[3.6rem]">
            <IconButton class="w-[14rem] h-[14rem]" />
            <!-- тень монетки -->
            <div class="absolute -bottom-[40px] left-1 right-1 h-[10px] bg-fuchsia-400 blur-lg rounded-full z-0"></div>
          </div>
          
          <p class="font-semibold xs:text-2xl text-xl text-center mt-[4.2rem]">
            <span class="text-primary-buttonBg font-semibold xs:text-2xl text-xl text-center">1 $PAR</span> = 0.00001 USDT
          </p>
          <p class="font-normal xs:text-[1rem] text-sm text-center text-muted-foreground">Connect your wallet and get the rewards</p>
        </CarouselItem>
        <CarouselItem>
          <h2 class="font-semibold text-2xl">Game Launch</h2>
          <p class="font-semibold">EARN THE <span class="text-primary-buttonBg font-semibold">$PAR TOKEN</span> AND BE A PART OF THE <span class="text-primary-buttonBg font-semibold">PARADISE GAME&reg;</span></p>
          
          <!-- !rounded-[1.5rem] -->
          <Button variant="link" class="bg-foreground border-[3px] border-background/70 !rounded-[0.5rem]">
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
      <!-- !rounded-[1.5rem] -->
      <Button @click="nextSlide" class="bg-primary-buttonBg hover:bg-fuchsia-400/70 w-full rounded-2xl h-14" size="lg">
        <span class="text-foreground font-semibold text-lg">Next</span>
      </Button>
    </div>
  </div>

  <!-- Здесь нужен див верхняя граница которого, сольёться по цвету с фоном -->
  <div class="div-bg absolute w-full m-w-[413px] -z-10 inset-0 pointer-events-none"></div>

</template>

<style scoped>
  /* Перенеси в PlayPage эти стили */
  .bg-img_landing {
    width: 100%;
    max-width: 413px;
    height: auto;
    /* height: 100vh; */
    background-image: url('@/shared/assets/images/Landing.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center -2px;
  }

  @media (max-width: 375px) {
    .bg-img_landing {
      /* height: 110vh; */
      background-size: cover;
    }
  }

  .div-bg {
    background: linear-gradient(0deg, rgba(13, 13, 14, 0.7), rgba(13, 13, 14, 0.7)),
                linear-gradient(180deg, rgba(13, 13, 14, 0) 0%, #0D0D0E 92%);
  }
</style>