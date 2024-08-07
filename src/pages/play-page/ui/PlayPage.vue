<script setup lang="ts">
  import { ref } from 'vue';
  import { 
    IconButtonOpt,
    IconVoltage,
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
  const waves = ref<number[]>([]);
  let waveCount = 0;
  const floatingNumbers = ref<{ id: number; x: number; y: number }[]>([]);

  const increment = (event: MouseEvent) => {
    count.value += 10;
    emit('updateCount', count.value);
    addWave();
    addFloatingNumber(event);
  };

  const addWave = () => {
    waves.value.push(waveCount++);
  };

  const removeWave = (index: number) => {
    waves.value = waves.value.filter(i => i !== index);
  };

  const addFloatingNumber = (event: MouseEvent) => {
    // (event.currentTarget as HTMLElement
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();
    floatingNumbers.value.push({ id, x, y });
    setTimeout(() => {
      floatingNumbers.value = floatingNumbers.value.filter(n => n.id !== id);
    }, 1000);
  };

  const openModal = () => {
    isModalOpen.value = true;
  };

</script>

<template>
  <div class="flex flex-col w-full max-w-md min-h-screen">
    <div class="gradient-bg flex flex-col w-full h-full mt-20">
      <div class="mt-14 flex flex-col">
        <p class="text-stone-400 text-center">Your Balance</p>
    
        <div class="pt-2 flex items-center justify-center">
          <IconButtonOpt class="w-7 h-7" />
          <span class="text-3xl font-bold pl-3">{{ count }}</span>
        </div>
      </div>

      <!-- контейнер для главной кнопки -->
      <div class="flex flex-col flex-grow items-center h-full">
        <button @click="increment">
          <!-- главная кнопка-монетка -->
          <!--  добавь при необходимости в родительский контейнер параметр overflow-hidden. -->
          <div class="my-6 flex justify-center w-full">
            <div class="relative">
              <IconButtonOpt class="relative w-52 h-52 z-10 active:scale-95 transition-transform" />
              
              <!-- SVG для эффекта волны -->
              <svg v-for="wave in waves" :key="wave" class="absolute top-[-50%] left-[-50%] w-[200%] h-[200%]">
                <circle cx="50%" cy="50%" r="0%" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2">
                  <animate attributeName="r" from="0%" to="50%" dur="1s" begin="0s" fill="freeze" @endEvent="removeWave(wave)" />
                  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0s" fill="freeze" />
                </circle>
              </svg>

              <!-- тень монетки -->
              <div class="absolute -bottom-[40px] left-1 right-1 h-4 gradient-shadow blur-md rounded-full z-0"></div>

              <!-- циферки -->
              <div v-for="number in floatingNumbers" :key="number.id" 
                class="float-numbs absolute pointer-events-none text-white font-bold text-2xl z-20"
                :style="{
                  left: `${number.x}px`,
                  top: `${number.y}px`,
                }">
                  +10
              </div>
            </div>
          </div> 
        </button>
      </div>
      
      <!-- progress bar -->
      <div class="pt-20 small_mobile px-5 flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <IconVoltage />
            <span class="font-semibold">974</span>
          </div>
          <span class="text-muted-foreground">/10000</span>
        </div>
        <Progress :model-value="60" />
      </div>

      <!-- Кнопка открывает модалку -->
      <!-- Перенести позже в @/features/adBanner/ui/AdBannerButton.vue -->
      <button @click="openModal" class="mt-3 mb-5 px-5 active:scale-95 transition-transform">
        <div class="bg-img w-full h-[7.4rem] bg-contain bg-no-repeat bg-center rounded-3xl"></div>
      </button>

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
    </div>
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

  .bg-img {
    background-image: url('@/shared/assets/images/Banner.png');
  }

  @media screen and (max-height: 670px) {
    .small_mobile {
      padding-top: 1rem;
    }
  }

  @keyframes float-up {
    to {
      transform: translateY(-100px);
      opacity: 0;
    }
  }

  .float-numbs {
    animation: float-up 1s forwards;
  }
</style>