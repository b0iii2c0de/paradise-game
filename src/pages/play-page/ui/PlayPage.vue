<script setup lang="ts">
  import { ref } from 'vue';
  import IconButton from '@/shared/assets/icons/IconButton.vue';
  import IconVoltage from '@/shared/assets/icons/IconVoltage.vue';
  import IconCross from '@/shared/assets/icons/IconCross.vue';
  import { Progress } from '@/shared/ui/progress';
  import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
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

  const closeModal = () => {
    isModalOpen.value = false
  }

  const handleOpenUpdate = (isOpen: boolean) => {
    isModalOpen.value = isOpen
  }

</script>

<template>
  <!-- это контейнер для главной кнопки-->
  <div class="gradient-bg flex flex-col h-full mt-[5.5rem]">
    <button @click="increment" class="active:scale-95 transition-transform">
      <div class="pt-[56px]">
        <div class="">
          <p class="text-stone-400 text-centerW">Your Balance</p>
      
          <div class="pt-2 flex items-center justify-center">
            <IconButton class="w-[24px] h-[24px]" />
            <span class="text-3xl font-bold pl-3">{{ count }}</span>
          </div>
        </div>
        
        <!-- главная кнопка-монетка -->
        <div class="pt-7 flex justify-center w-full">
          <div class="relative">
            <IconButton class="relative z-10" />
            
            <!-- SVG для эффекта волны -->
            <svg v-for="wave in waves" :key="wave" class="absolute top-[-50%] left-[-50%] w-[200%] h-[200%]">
              <circle cx="50%" cy="50%" r="0%" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2">
                <animate attributeName="r" from="0%" to="50%" dur="1s" begin="0s" fill="freeze" @endEvent="removeWave(wave)" />
                <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0s" fill="freeze" />
              </circle>
            </svg>

            <!-- тень монетки -->
            <div class="absolute -bottom-[40px] left-1 right-1 h-[10px] bg-violet-400/30 blur-lg rounded-full z-0"></div>

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
      </div>  
    </button>

    <div class="pt-[86px] px-[1.2rem] flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <IconVoltage />
          <span>974</span>
        </div>
        <span class="text-stone-400">/1000</span>
      </div>
      <Progress :model-value="60" />
    </div>

    <!-- Кнопка открывает модалку -->
    <!-- Перенести позже в @/features/adBanner/ui/AdBannerButton.vue -->
    <button @click="openModal" class="pt-[10px] pb-[20px] px-[15px] active:scale-95 transition-transform">
      <div class="bg-img w-full h-[7.4rem] bg-contain bg-no-repeat bg-center rounded-3xl"></div>
    </button>

    <!-- модалка -->
    <AlertDialog v-model:open="isModalOpen">
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogCancel class="absolute top-5 right-5 rounded-full bg-neutral-800">
            <IconCross />
          </AlertDialogCancel>
          <AlertDialogTitle>Announce</AlertDialogTitle>
          <AlertDialogDescription>
            We are announcing a drawing for the user who invites the most referrals!
          </AlertDialogDescription>
          <AlertDialogDescription class="text-fuchsia-400">
            We are increasing the award to 8,000 USDT for first place, 1,500 USDT for second place and 500 USDT for third place.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <!-- <AlertDialogFooter>
          <AlertDialogCancel class="rounded-full outline-none bg-neutral-800">
              <IconCross />
          </AlertDialogCancel>
        </AlertDialogFooter> -->
      </AlertDialogContent>
    </AlertDialog>

  </div>
</template>

<style scoped>
  .gradient-bg {
    width: 413px;
    height: 500px;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(80, 21, 177, 0.5) 56.27%, rgba(0, 0, 0, 0.5) 100%), radial-gradient(88.83% 59.06% at 50% 40.94%, rgba(161, 93, 202, 0.3) 0%, rgba(10, 10, 11, 0) 100%);
  }

  .bg-img {
    background-image: url('@/shared/assets/images/Banner.png');
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