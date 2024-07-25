<script setup lang="ts">
  import { Button } from '@/shared/ui/button';
  import {
    IconButton,
    IconCross,
    IconPencil,
  } from '@/shared/assets/icons'
  
</script>

<template>
  <div class="flex flex-col justify-center w-full max-w-[413px] h-screen max-h-[34.3rem] mt-[4.5rem] px-4">
    <div class="flex flex-col flex-shrink-0 pb-6">
      <h2 class="font-semibold xs:text-[1.4rem] text-xl">Wallet</h2>
      <p class="font-normal text-muted-foreground xs:text-base text-sm">Set up your wallet to receive rewards.</p>
    </div>

    <div class="flex-grow">
      <div class="border border-muted-foreground/5 rounded-2xl flex flex-col items-start justify-center py-3 px-4 mt-0 bg-muted-foreground/10">
        <div class="flex flex-col items-start justify-center gap-3">
          <h2 class="font-normal text-muted-foreground xs:text-base text-sm">Your Balance</h2>
          <div class="flex flex-row gap-2 items-center justify-center">
            <IconButton class="w-6 h-6"/>
            <p class="font-bold xs:text-xl text-lg text-primary-buttonBg">102,400</p>
          </div>
        </div>
      </div>
      
      <div class="border border-muted-foreground/5 rounded-2xl flex flex-row items-center justify-between py-4 px-4 mt-4 bg-muted-foreground/10">
        <div class="flex flex-col items-start justify-center gap-1">
          <h2 class="font-normal text-muted-foreground xs:text-base text-sm">XRP Wallet</h2>
          <p class="font-semibold xs:text-xl text-lg">rNEgaricfF.....duxXPd</p>
        </div>

        <div class="flex flex-row items-center justify-center gap-3">
          <Button variant="ghost" class="w-12 h-12 bg-muted-foreground/20 rounded-2xl active:scale-95 transition-transform">
            <IconPencil />
          </Button>
          <Button variant="ghost" class="w-12 h-12 bg-muted-foreground/20 rounded-2xl active:scale-95 transition-transform">
            <IconCross />
          </Button>
        </div>
      </div>

      <Button size="xl" class="mt-4 w-full rounded-2xl bg-primary-buttonBg hover:bg-fuchsia-400/50 active:scale-95 transition-transform">
        <div class="flex flex-row items-center justify-center gap-4">
          <IconCross class="w-2 h-2 rotate-45" />
          <span class="font-semibold xs:text-base text-sm text-foreground">Add XRP Wallet</span>
        </div>
      </Button>
    </div>
    
    <div class="flex-shrink-0 -mb-[80px]">
      <h2 class="font-normal text-muted-foreground xs:text-base text-sm text-center">Connect your wallet to withdraw your tokens.</h2>
      <Button variant="ghost" size="xl" class="mt-3 w-full rounded-2xl bg-background hover:bg-background xs:border-2 border border-primary-buttonBg hover:border-fuchsia-400/40 active:scale-95 transition-transform">
        <span class="font-semibold xs:text-base text-sm hover:text-fuchsia-400/40 text-primary-buttonBg">Withdrawal</span>
      </Button>
    </div>
  </div>
</template>

<style scoped>

</style>