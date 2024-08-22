<script setup lang="ts">
  import { Button } from '@/shared/ui/button';
  import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
  import { 
    IconAddFriends,
    IconButton,
    IconStar,
    IconLevelFirst,
    IconLevelSecond,
    IconLevelThird,
  } from '@/shared/assets/icons';
  
</script>

<template>
  <div class="flex flex-col px-4">

      <div class="flex flex-col mt-6 pb-6">
        <h2 class="font-semibold xs:text-[1.4rem] text-xl">Friends</h2>
        <p class="font-normal text-muted-foreground xs:text-base text-sm">Invite your friends and earn more!</p>
      </div>

      <div class="border-2 border-muted-foreground/5 rounded-2xl flex flex-col items-start justify-center py-4 px-[1.1rem] bg-muted-foreground/10">
        <div class="flex flex-row items-center justify-center gap-6">
          <IconButton class="w-12 h-12"/>
          <div class="flex flex-col">
            <h3 class="font-semibold xs:text-base text-sm">Invite friend</h3>
            <p class="font-normal text-muted-foreground xs:text-base text-sm"><span class="font-medium text-primary-buttonBg xs:text-base text-sm">50,000</span> for you and friend</p>
          </div>
        </div>
        <div class="h-px bg-muted-foreground/10 w-full mt-4"></div>
        <div class="flex flex-row items-center justify-center gap-6 mt-5">
          <IconStar class="w-12 h-12"/>
          <div class="flex flex-col">
            <h3 class="font-semibold xs:text-base text-sm">Friend with <span class="font-semibold xs:text-base text-sm text-blue-400">Telegram Premium</span></h3>
            <p class="font-normal text-muted-foreground xs:text-base text-sm"><span class="font-medium text-primary-buttonBg xs:text-base text-sm">150,000</span> for you and friend</p>
          </div>
        </div>
      </div>
      
      <!-- при нажатии копируется реф. ссылка, снизу выползает модальное окно с уведом. -->
      <Button size="xl" class="mt-7 w-full rounded-2xl bg-primary-buttonBg hover:bg-fuchsia-400/50 active:scale-95 transition-transform">
        <div class="flex flex-row items-center justify-center">
          <IconAddFriends class="w-auto h-[1.3rem] pb-[1px] pr-3" />
          <span class="font-semibold xs:text-base text-sm text-foreground">Invite friends</span>
        </div>
      </Button>

      <div class="flex flex-col mt-6">
        <h2 class="font-semibold xs:text-[1.4rem] text-xl">Bonus</h2>
        <p class="font-normal text-muted-foreground xs:text-base text-sm">The more friends more rewards!</p>
      </div>

      <div class="flex flex-col">
        <div class="border border-muted-foreground/5 rounded-2xl flex flex-col items-start justify-center py-3 px-3 mt-5 bg-muted-foreground/10">
          <div class="flex flex-row items-center justify-between w-full">
            <IconLevelFirst class="w-14 h-14 flex-shrink-0"/>
            <div class="flex flex-col flex-grow mx-4">
              <h3 class="font-semibold xs:text-base text-sm">Invite 3 friends</h3>
              <div class="flex flex-row gap-1 justify-start items-center mt-1">
                <IconButton class="w-5 h-5"/>
                <p class="font-medium xs:text-base text-sm">250,000</p>
              </div>
            </div>
            <div class="flex-shrink-0 pr-[0.8rem]">
              <p class="font-semibold xs:text-base text-sm">2<span class="font-medium text-muted-foreground xs:text-sm text-xs pl-[5px]">/3</span></p>
            </div>
          </div>
        </div>

        <div class="border border-muted-foreground/5 rounded-2xl flex flex-col items-start justify-center py-3 px-3 mt-3 bg-muted-foreground/10">
          <div class="opacity-50 flex flex-row items-center justify-between w-full">
            <IconLevelSecond class="w-14 h-14 flex-shrink-0"/>
            <div class="flex flex-col flex-grow mx-4">
              <h3 class="font-semibold xs:text-base text-sm">Invite 10 friends</h3>
              <div class="flex flex-row gap-1 justify-start items-center mt-1">
                <IconButton class="w-5 h-5"/>
                <p class="font-medium xs:text-base text-sm">200,000</p>
              </div>
            </div>
          </div>
        </div>

        <div class="border border-muted-foreground/5 rounded-2xl flex flex-col items-start justify-center py-3 px-3 mt-3 bg-muted-foreground/10">
          <div class="opacity-50 flex flex-row items-center justify-between w-full">
            <IconLevelThird class="w-14 h-14 flex-shrink-0"/>
            <div class="flex flex-col flex-grow mx-4">
              <h3 class="font-semibold xs:text-base text-sm">Invite 100 friends</h3>
              <div class="flex flex-row gap-1 justify-start items-center mt-1">
                <IconButton class="w-5 h-5"/>
                <p class="font-medium xs:text-base text-sm">1,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row items-center gap-2 mt-6">
        <h2 class="font-semibold xs:text-[1.4rem] text-xl">Friends list</h2>
        <span class="font-semibold xs:text-lg text-base text-primary-buttonBg">(1)</span>
      </div>

      <div class="flex flex-col">
        <div class="flex flex-row items-center justify-between mt-5 px-3">
          <p class="font-semibold text-muted-foreground text-[0.5rem] xs:text-[0.7rem]">USER</p>
          <p class="font-semibold text-muted-foreground text-[0.5rem] xs:text-[0.7rem]">EARNED</p>
        </div>

        <div class="border border-muted-foreground/5 rounded-2xl flex flex-col items-start justify-center py-3 px-3 mt-4 bg-muted-foreground/10">
          <div class="flex flex-row items-center justify-between w-full">
            <Avatar class="w-12 h-12 flex-shrink-0">
              <AvatarImage src="src/shared/assets/images/orca.jpg" alt="@radix-vue" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div class="flex flex-col flex-grow mx-4">
              <p class="font-medium xs:text-base text-sm">@b0iii2c0de</p>
            </div>
            <div class="opacity-50 flex-shrink-0 pr-[0.8rem]">
              <div class="flex flex-row gap-1 justify-start items-center mt-1">
                <IconButton class="w-5 h-5"/>
                <p class="font-medium xs:text-base text-sm">50,000</p>
              </div>
            </div>
          </div>
        </div>

        <div class="border border-muted-foreground/5 rounded-2xl flex flex-col items-start justify-center py-3 px-3 mt-4 bg-muted-foreground/10">
          <div class="flex flex-row items-center justify-between w-full">
            <Avatar class="w-12 h-12 flex-shrink-0">
              <AvatarImage src="src/shared/assets/images/orca.jpg" alt="@radix-vue" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div class="flex flex-col flex-grow mx-4">
              <p class="font-medium xs:text-base text-sm">@b0iii2c0de</p>
            </div>
            <div class="opacity-50 flex-shrink-0 pr-[0.8rem]">
              <div class="flex flex-row gap-1 justify-start items-center mt-1">
                <IconButton class="w-5 h-5"/>
                <p class="font-medium xs:text-base text-sm">50,000</p>
              </div>
            </div>
          </div>
        </div>

      </div>

  
  </div>
</template>
