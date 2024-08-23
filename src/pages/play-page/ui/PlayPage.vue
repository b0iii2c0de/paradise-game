<script setup lang="ts">
  import { ref } from 'vue';
  import { usePlayStore } from '@/entities/play';
  import { 
    IconButtonOpt,
    IconVoltage,
    IconRocket,
    IconCross,
  } from '@/shared/assets/icons';
  import { Progress } from '@/shared/ui/progress';
  import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
  } from '@/shared/ui/alert-dialog';

  const count = ref(0);
  const isModalOpen = ref(false);
  const emit = defineEmits(['updateCount']);
  // const waves = ref<number[]>([]);
  // let waveCount = 0;
  // const LEVELS: [] = []; 
  const playStore = usePlayStore();
  const clicks = ref<{ id: number; x: number; y: number }[]>([]);

  const increment = (event: MouseEvent) => {
    count.value += 1;
    emit('updateCount', count.value);
    handleCardClick(event);
    // addWave();
  };

  const handleCardClick = (e: MouseEvent) => {
    if (playStore.energy - playStore.pointsPerClick < 0) return;
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 7}deg) rotateY(${x / 7}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);
    playStore.updateLastClickTimestamp();
    playStore.clickTriggered();
    const clickId = Date.now();
    clicks.value.push({ id: clickId, x: e.pageX, y: e.pageY });
    setTimeout(() => {
      clicks.value = clicks.value.filter(click => click.id !== clickId);
    }, 1000);
  };

  // const handleAnimationEnd = (id: number) => {
  //   clicks.value = clicks.value.filter(click => click.id !== id);
  // };

  // const calculateProgress = () => {
  //   if (playStore.playLevelIndex >= LEVELS.length - 1) {
  //     return 100;
  //   }
  //   const currentLevelMin = LEVELS[playStore.playLevelIndex].minPoints;
  //   const nextLevelMin = LEVELS[playStore.playLevelIndex + 1].minPoints;
  //   const progress = ((playStore.points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
  //   return Math.min(progress, 100);
  // };

  // const handleViewChange = (view) => {
  //   // Implement view change logic here
  // };


  // const addWave = () => {
  //   waves.value.push(waveCount++);
  // };

  // const removeWave = (index: number) => {
  //   waves.value = waves.value.filter(i => i !== index);
  // };

  const openModal = () => {
    isModalOpen.value = true;
  };

</script>

<template>
    <div class="gradient-bg flex flex-col flex-grow flex-shrink pt-8">
      <div class="flex flex-col justify-center flex-grow flex-shrink min-h-0 oveflow-x-hidden overflow-visible w-full">
        <!-- title -->
        <div class="flex flex-col">
          <h1 class="text-muted-foreground text-center">Your Balance</h1>
      
          <div class="pt-2 flex items-center justify-center">
            <IconButtonOpt class="w-7 h-7" />
            <span class="text-3xl font-bold pl-3">{{ count }}</span>
          </div>
        </div>

        <!-- контейнер для главной кнопки -->
        <button @mousedown="increment" class="flex justify-center">
          <div>
            <!-- главная кнопка-монетка -->
              <div class="my-6 relative">
                <IconButtonOpt class="w-60 h-60" />

                <!-- тень монетки -->
                <div class="absolute -bottom-[40px] left-1 right-1 h-4 gradient-shadow blur-md rounded-full z-0"></div>
              </div>
          </div>
        </button>
      </div>

      <div class="flex flex-col flex-shrink-0">
        <!-- progress bar -->
        <div class="progress_bar px-5 flex flex-col gap-5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1">
              <IconVoltage />
              <span class="font-semibold">974</span>
              <span class="text-muted-foreground text-sm">/10000</span>
            </div>
            <!-- это кнопка на другой экран -->
            <div class="flex items-center gap-1">
              <IconRocket />
              <span class="font-semibold">Boost</span>
            </div>
          </div>
          <Progress :model-value="60" />
        </div>


      </div>

          <!-- Кнопка открывает модалку -->
    <!-- Перенести позже в @/features/adBanner/ui/AdBannerButton.vue -->
    <button @click="openModal" class="my-3 px-5 active:scale-95 transition-transform">
      <div class="bg-img max-w-full aspect-[3.4] bg-contain bg-no-repeat bg-center rounded-3xl"></div>
    </button>
    </div>


    <!-- модалка -->
    <AlertDialog v-model:open="isModalOpen">
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogCancel class="absolute top-5 right-5 rounded-full bg-neutral-800">
            <IconCross />
          </AlertDialogCancel>
          <AlertDialogTitle class="text-left">Announce</AlertDialogTitle>
          <AlertDialogDescription class="text-left">
            We are announcing a drawing for the user who invites the most referrals!
          </AlertDialogDescription>
          <AlertDialogDescription class="text-fuchsia-400 text-left">
            We are increasing the award to 8,000 USDT for first place, 1,500 USDT for second place and 500 USDT for third place.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>

    <!-- @animationend="handleAnimationEnd(click.id) в атрибутах ниже" -->
    <div v-for="click in clicks" 
      :key="click.id" 
      class="float-numbs z-10 absolute text-3xl font-bold text-white pointer-events-none flex justify-center" 
      :style="{ 
        top: `${click.y - 42}px`, 
        left: `${click.x - 28}px`,
      }">
        +{{ playStore.pointsPerClick }}
    </div>
</template>

<style scoped>
  .gradient-bg {
    background-image: 
      linear-gradient(180deg, 
        rgba(0, 0, 0, 1) 5%, 
        rgba(52, 10, 118, 0.5) 40%, 
        rgba(0, 0, 0, 1) 80%
      ), 
      radial-gradient(88.83% 59.06% at 50% 40.94%, 
        rgba(191, 151, 216, 0.3) 10%, 
        rgba(10, 10, 11, 0) 500%
      );
  }

  .gradient-shadow {
    background: 
      linear-gradient(270deg, 
        rgba(158, 85, 203, 0) 4.16%, 
        rgba(87, 49, 117, 0.6) 52.75%, 
        rgba(90, 57, 133, 0) 100%);
  }

  .gradient-progress {
    background: 
      linear-gradient(90deg, 
      #FBB5FD 0%, 
      #D463E8 50.5%, 
      #2F39A3 100%);
  }

  /* @media screen and (max-height: 740px) {
    .progress_bar {
      padding-top: 1rem;
    }
  }

  @media screen and (max-height: 740px) {
    .title_sm {
      margin-top: 0%;
    }
  } */

  @keyframes float-up {
    to {
      transform: translateY(-100px);
      opacity: 0;
    }
  }

  .bg-img {
    background-image: url('@/shared/assets/images/banner_app.png');
  }

  .float-numbs {
    animation: float-up 1s forwards;
  }
</style>