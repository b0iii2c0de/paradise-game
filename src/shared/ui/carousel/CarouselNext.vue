<script setup lang="ts">
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'

const props = defineProps<WithClassAsProps>()

const { scrollNext } = useCarousel()
</script>

<template>
  <Button
    :class="cn(
      'touch-manipulation',
      props.class,
    )"
    variant="default"
    @click="scrollNext"
  >
    <span class="text-foreground font-semibold text-sm xs:text-lg">Next</span>
  </Button>
</template>
