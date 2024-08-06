<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'

const props = defineProps<WithClassAsProps>()

const { scrollNext } = useCarousel()
const isDisabled = ref(true)

onMounted(() => {
  setTimeout(() => {
    isDisabled.value = false
  }, 3000)
})

const handleClick = () => {
  if (!isDisabled.value) {
    scrollNext()
    isDisabled.value = true
    setTimeout(() => {
      isDisabled.value = false
    }, 3000)
  }
}
</script>

<template>
  <Button
    :disabled="isDisabled"
    :class="cn(
      'touch-manipulation',
      props.class,
    )"
    variant="accent"
    @click="handleClick"
  >
    <span class="text-foreground font-semibold text-sm xs:text-lg">Next</span>
  </Button>
</template>
