<script setup lang="ts">
import { useProvideCarousel } from './useCarousel'
import type { CarouselEmits, CarouselProps, WithClassAsProps } from './interface'
import { cn } from '@/shared/lib/utils'

const props = withDefaults(defineProps<CarouselProps & WithClassAsProps>(), {
  orientation: 'horizontal',
})

const emits = defineEmits<CarouselEmits>()

const carouselArgs = useProvideCarousel(props, emits)

defineExpose(carouselArgs)

</script>

<template>
  <div
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
  >
    <slot v-bind="carouselArgs" />
  </div>
</template>
