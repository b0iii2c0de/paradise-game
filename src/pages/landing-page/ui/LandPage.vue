<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext
  } from '@/shared/ui/carousel'
  import { Button } from '@/shared/ui/button'
  import {
    IconOA,
    IconXrp,
    IconUnreal,
    IconEpic,
    IconPlayfab,
    IconArrowUpRight,
    IconButton,
    IconLogo
  } from '@/shared/assets/icons/'

  const currentSlide = ref(0)
  const router = useRouter()

  const handleNext = () => {
    if (currentSlide.value < 2) {
      currentSlide.value++
    } else {
      router.push('/play')
    }
  } 

  /*
  <div class="fixed inset-0 flex flex-col w-full max-w-xl mx-auto overflow-auto">
    <Carousel class="min-h-full bg-img_landing flex flex-shrink-0 flex-col">
      <!-- вернуться если будет урезаться на маленьких экранах -->

      <CarouselContent class="min-h-full">
        <CarouselItem class="flex flex-col items-center justify-between h-full">
          <div class="max-w-[169px] w-full mt-[115px]">
            <IconLogo class="w-full h-auto max-h-[55px]" />
          </div>

          <h2 class="font-semibold text-center mt-3 xs:text-xl text-lg">
            REAL WORLD SIMULATION GAME
          </h2>
          <h2 class="font-semibold xs:text-xl text-lg mt-[-2px]">BASED ON AI</h2>

          <!-- Трейлер -->
          <div class="w-full h-auto xs:px-8 px-4 mt-7 xs:mb-0 mb-5 aspect-video">
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
          <div
            class="flex flex-row items-center justify-between px-12 -mt-1 max-w-[413px] w-full mx-auto"
          >
            <IconOA />
            <IconXrp />
            <IconUnreal class="w-10 h-10" />
            <IconEpic class="w-8 h-9" />
            <IconPlayfab />
          </div>
        </CarouselItem>

        <CarouselItem class="relative flex flex-col items-center justify-between h-full">
          <h2 class="font-semibold xs:text-3xl text-2xl text-center mt-[7.2rem]">
            Play & Earn Real Money
          </h2>

          <p class="font-semibold text-center mt-6 xs:text-[1.2rem] text-base">THE <span class="text-primary-buttonBg font-semibold xs:text-[1.2rem] text-base">FIRST TOKEN</span> THAT HAS <span class="text-primary-buttonBg font-semibold xs:text-[1.2rem] text-base">REAL VALUE</span></p>

          <div class="flex-grow flex flex-col justify-center items-center mt-[3.6rem]">
            <IconButton class="w-[14rem] h-[14rem]" />
            <!-- тень -->
            <div class="h-[10px] w-28 bg-fuchsia-400/20 blur-md rounded-full mt-6"></div>
          </div>

          <div class="flex flex-col items-center mt-[2.1rem]">
            <p class="font-bold xs:text-[1.7rem] text-xl text-center">
              <span class="text-primary-buttonBg font-semibold xs:text-[1.7rem] text-xl">1 $PAR</span>
              ≈ 0.00001 USDT
            </p>
          </div>

          <div class="absolute -bottom-12 left-5 right-0">
            <p class="font-normal xs:text-[1rem] text-sm text-center text-muted-foreground">
              Connect your wallet and get the rewards
            </p>
          </div>
        </CarouselItem>
        <CarouselItem class="relative flex flex-col items-center justify-between h-full">
          <div>
            <h2 class="font-semibold xs:text-[2rem] text-2xl text-center mt-[7.2rem]">
              Game Launch
            </h2>
            <p class="font-semibold text-center mt-6 xs:text-[1.2rem] text-base">
              EARN THE
              <span class="text-primary-buttonBg font-semibold xs:text-[1.2rem] text-base"
                >$PAR TOKEN</span
              >
              AND BE A PART
              <br />
              OF THE
              <span class="text-primary-buttonBg font-semibold xs:text-[1.2rem] text-base"
                >PARADISE GAME&reg;</span
              >
            </p>
          </div>

          <div class="mt-[2rem] w-full max-w-[16rem]">
            <Button
              size="xl"
              class="w-full bg-foreground border-[3px] border-background/70 !rounded-[0.5rem] active:scale-95 transition-transform"
            >
              <span class="text-sm xs:text-lg text-primary-foreground font-semibold pr-[1rem]"
                >Read more</span
              >
              <IconArrowUpRight />
            </Button>
          </div>

          <!-- GIF -->
          <div class="xs:px-8 px-4 pt-8 w-full">
            <img
              src="@/shared/assets/images/car.gif"
              alt="car"
              class="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </CarouselItem>
      </CarouselContent>

      <div class="flex-grow"></div>

      <div class="w-full max-w-xl mx-auto">
        <!-- Три полоски над кнопкой -->
        <div class="flex flex-row justify-center items-center gap-3 mt-9">
          <div 
            v-for="index in 3" 
            :key="index" 
            :class="['w-[55px] h-[3px] rounded-full', index - 1 === currentSlide ? 'bg-primary-buttonBg' : 'bg-neutral-700']">
          </div>
        </div>

        <div class="my-6 px-4">
          <CarouselNext @click="handleNext" class="w-full rounded-2xl h-14 active:scale-95 transition-transform"/>
        </div>
      </div>
    </Carousel>
  </div>

  <!-- Здесь нужен див верхняя граница которого, сольёться по цвету с фоном -->

  */
</script> 

<template>
  <div class="mask fixed inset-0 max-w-xl mx-auto"></div>
  <div class="bg-img_landing fixed inset-0 max-w-xl mx-auto"></div>
  <Carousel class="min-h-full flex flex-col gap-6 py-6">
    <CarouselContent class="flex flex-grow flex-shrink max-w-full">
      <CarouselItem class="flex flex-col items-center justify-center">
        <div class="max-w-[169px] w-full">
          <IconLogo class="w-full h-auto max-h-[55px]" />
        </div>

        <h2 class="font-semibold text-center mt-3 xs:text-xl px-3 text-lg text-balance">REAL WORLD SIMULATION GAME </h2>
        <h2 class="font-semibold xs:text-xl text-lg mt-[-2px]">BASED ON AI</h2>

        <!-- Трейлер -->
        <div class="w-full h-auto px-5 mt-7 aspect-video">
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
        <div class="flex flex-row items-center justify-between px-12 my-6 max-w-[413px] w-full mx-auto">
          <IconOA />
          <IconXrp />
          <IconUnreal class="w-10 h-10" />
          <IconEpic class="w-8 h-9" />
          <IconPlayfab />
        </div>
        </CarouselItem>

      <CarouselItem class="flex flex-col items-center justify-center">

          <h2 class="font-semibold xs:text-3xl text-2xl text-center">
            Play & Earn Real Money
          </h2>

          <p class="font-semibold text-center mt-3 mb-6 xs:text-[1.2rem] text-base">
            THE <span class="text-primary-buttonBg font-semibold xs:text-[1.2rem] text-base">FIRST TOKEN</span> THAT HAS <span class="text-primary-buttonBg font-semibold xs:text-[1.2rem] text-base">REAL VALUE</span>
          </p>

          <div class="flex flex-col justify-center items-center my-10">
            <IconButton class="w-[14rem] h-[14rem]" />
            <!-- тень -->
            <div class="h-[10px] w-28 bg-fuchsia-400/20 blur-md rounded-full mt-6"></div>
          </div>

          <div class="flex flex-col items-center">
            <p class="font-bold xs:text-[1.7rem] text-xl text-center">
              <span class="text-primary-buttonBg font-semibold xs:text-[1.7rem] text-xl">1 $PAR</span>
              ≈ 0.00001 USDT
            </p>
          </div>

          <p class="font-normal xs:text-[1rem] text-sm text-center text-muted-foreground mt-2">
              Connect your wallet and get the rewards
            </p>

        </CarouselItem>

      <CarouselItem class="flex flex-col items-center justify-center">
      <h2 class="font-semibold xs:text-[2rem] text-2xl text-center">
          Game Launch
        </h2>
        <p class="font-semibold text-center mt-5 xs:text-[1.2rem] text-base text-balance">
          EARN THE
          <span class="text-primary-buttonBg font-semibold xs:text-[1.2rem] text-base"
            >$PAR TOKEN</span
          >
          AND BE A PART
          <br />
          OF THE
          <span class="text-primary-buttonBg font-semibold xs:text-[1.2rem] text-base"
            >PARADISE GAME&reg;</span
          >
        </p>

        <div class="my-8 w-full max-w-[16rem]">
          <Button
            size="xl"
            class="w-full bg-foreground border-[3px] border-background/70 !rounded-[0.5rem] active:scale-95 transition-transform"
          >
            <span class="text-sm xs:text-lg text-primary-foreground font-semibold pr-[1rem]"
              >Read more</span
            >
            <IconArrowUpRight />
          </Button>
        </div>

        <!-- GIF -->
        <div class="xs:px-8 px-4 w-full">
          <img
            src="@/shared/assets/images/car.gif"
            alt="car"
            class="w-full h-auto rounded-2xl object-cover"
          />
        </div>

      </CarouselItem>
    </CarouselContent>

    <!-- Три полоски над кнопкой -->
    <div class="flex justify-center items-center gap-3">
      <div 
        v-for="index in 3" 
        :key="index" 
        :class="['w-1/6 h-[3px] rounded-full', index - 1 === currentSlide ? 'bg-primary-buttonBg' : 'bg-neutral-700']">
      </div>
    </div>

    <div class="px-5 flex flex-col">
      <CarouselNext @click="handleNext" class="rounded-2xl h-14 active:scale-95 transition-transform"/>
    </div>
  </Carousel> 
</template>

<style scoped>
  /* Перенеси в PlayPage эти стили */
  .bg-img_landing {
    background-image: url('/paradise-game/src/shared/assets/images/Landing.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center -2px;
  }

  .mask {
    background: linear-gradient(0deg, rgba(13, 13, 14, 0.7), rgba(13, 13, 14, 0.7)),
      linear-gradient(180deg, rgba(13, 13, 14, 0) 0%, #0d0d0e 92%);
  }
</style>
