<script setup lang="ts">
  import { type HTMLAttributes, computed } from 'vue'
  import {
    ProgressIndicator,
    ProgressRoot,
    type ProgressRootProps,
  } from 'radix-vue'
  import { cn } from '@/shared/lib/utils'

  const props = withDefaults(
    defineProps<ProgressRootProps & { class?: HTMLAttributes['class'] }>(),
    {
      modelValue: 0,
    },
  )

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
  })
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="
      cn(
        'relative h-[5px] w-full overflow-hidden rounded-full bg-secondary',
        props.class,
      )
    "
  >
    <ProgressIndicator
      class="h-full w-full flex-1 gradient-progress transition-all"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>

<style scoped>
  .gradient-progress {
    background: 
      linear-gradient(90deg, 
      #FBB5FD 0%, 
      #D463E8 50.5%, 
      #2F39A3 100%);
  }
</style>
