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
  import IconArrowUpRight from '@/shared/assets/icons/IconArrowUpRight.vue';
  import IconButton from '@/shared/assets/icons/IconButton.vue';

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
  <div class="bg-img_landing">
    <Carousel v-model="currentSlide">
      <CarouselContent>
        <CarouselItem>
          
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <Button @click="nextSlide" variant="secondary" class="bg-primary-buttonBg rounded-2xl">
      Next
    </Button>
  </div>
</template>

<style scoped>
.bg-img_landing {
  width: 413px;
  height: 500px;
  background-image: url('@/shared/assets/images/Landing.png');
}
</style>