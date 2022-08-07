<script lang="ts" setup>
const { images } = defineProps({
  images: {
    type: Array<string>,
    required: true
  },
})

const currentImageIndex = ref(0);

function selectImage(imageIndex: number) {
  currentImageIndex.value = imageIndex;
}

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
}

function previousImage() {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + images.length) % images.length;
}

function isCurrentImageIndex(imageIndex: number) {
  return currentImageIndex.value === imageIndex;
}
</script>

<template>
  <div class="relative w-full">
    <!-- Indicators -->
    <div class="absolute p-0 right-0 bottom-0 left-0 mb-4 flex justify-center gap-2 z-[2] box-border mx-[15%]">
      <button v-for="(imageUrl, imageIndex) in images" :key="imageIndex" @click="selectImage(imageIndex)" :class="[
        'w-7 h-1 border-y-[10px] box-content bg-white rounded-sm border-transparent bg-clip-padding',
        {
          'opacity-50 hover:scale-x-110 hover:opacity-75': !isCurrentImageIndex(imageIndex),
          'scale-y-125': isCurrentImageIndex(imageIndex),
        }
      ]">
      </button>
    </div>

    <!-- Content -->
    <div class="w-full overflow-hidden block">
      <div v-for="(imageUrl, imageIndex) in images" :key="imageIndex" :class="[
        'w-full',
        {
          'hidden': imageIndex !== currentImageIndex,
        },
      ]">
        <img :src="imageUrl" :alt="imageUrl" class="block w-full float-left" />
      </div>
    </div>

    <!-- Prev button -->
    <button @click="previousImage()"
      class="absolute z-[1] inset-y-0 left-0 w-[15%] flex items-center justify-center group hover:bg-gradient-to-r hover:from-black/50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white opacity-50 group-hover:opacity-100" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <!-- Next button -->
    <button @click="nextImage()"
      class="absolute z-[1] inset-y-0 right-0 w-[15%] flex items-center justify-center group hover:bg-gradient-to-l hover:from-black/50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white opacity-50 group-hover:opacity-100" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>
