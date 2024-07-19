import { createInjectionState } from '@vueuse/core'
import emblaCarouselVue from 'embla-carousel-vue'
import { onMounted, ref } from 'vue'
import type { UnwrapRefCarouselApi as CarouselApi, CarouselEmits, CarouselProps } from './interface'

/**
 * Создает состояние карусели с помощью функции createInjectionState.
 * @param {Object} props - Свойства карусели.
 * @param {Object} props.opts - Опции для embla-carousel.
 * @param {string} props.orientation - Ориентация карусели ('horizontal' или 'vertical').
 * @param {Array} props.plugins - Плагины для embla-carousel.
 * @param {Object} emits - Объект для эмиттера событий.
 * @returns {Object} Объект с методами и состоянием карусели.
 */
const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({
    opts,
    orientation,
    plugins,
  }: CarouselProps, emits: CarouselEmits) => {
    /**
     * Инициализация embla-carousel.
     */
    const [emblaNode, emblaApi] = emblaCarouselVue({
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    }, plugins)

    /**
     * Прокрутка к предыдущему слайду.
     */
    function scrollPrev() {
      emblaApi.value?.scrollPrev()
    }

    /**
     * Прокрутка к следующему слайду.
     */
    function scrollNext() {
      emblaApi.value?.scrollNext()
    }

    /**
     * Реактивные переменные для отслеживания возможности прокрутки.
     */
    const canScrollNext = ref(false)
    const canScrollPrev = ref(false)

    /**
     * Обработчик события выбора слайда.
     * @param {CarouselApi} api - API карусели.
     */
    function onSelect(api: CarouselApi) {
      canScrollNext.value = api?.canScrollNext() || false
      canScrollPrev.value = api?.canScrollPrev() || false
    }

    /**
     * Инициализация карусели при монтировании компонента.
     */
    onMounted(() => {
      if (!emblaApi.value)
        return

      emblaApi.value?.on('init', onSelect)
      emblaApi.value?.on('reInit', onSelect)
      emblaApi.value?.on('select', onSelect)

      emits('init-api', emblaApi.value)
    })

    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation }
  },
)

/**
 * Хук для использования состояния карусели.
 * 
 * @returns {Object} Состояние карусели.
 * @throws {Error} Если хук используется вне компонента <Carousel />.
 */
function useCarousel() {
  const carouselState = useInjectCarousel()

  if (!carouselState)
    throw new Error('useCarousel must be used within a <Carousel />')

  return carouselState
}

export { useCarousel, useProvideCarousel }
