<script lang="ts" setup>
// const images = [
//   "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
//   "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
//   "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
// ];

const images = randomImages(3);

const currentImageIndex = ref(0);

function randomImages(length: number) {
  let images = [];
  for (let index = 0; index < length; index++) {
    images[index] = `https://picsum.photos/1080/566?random=${index}`;
  }

  return images;
}

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
</script>

<template>
  <div class="relative w-full">
    <!-- Indicators -->
    <div class="absolute right-0 bottom-0 left-0 flex justify-center z-10">
      <button
        v-for="(item, index) in images"
        :key="index"
        @click="selectImage(index)"
      >
        Indicator
      </button>
    </div>

    <!-- Content -->
    <div class="relative">
      <img
        v-for="(imageUrl, imageIndex) in images"
        :key="imageIndex"
        :src="imageUrl"
        :alt="imageUrl"
        class="absolute"
        :class="[
          {
            hidden: imageIndex !== currentImageIndex,
          },
        ]"
      />
    </div>

    <!-- Prev button -->
    <button @click="nextImage()" class="z-10">
      <svg class="h-6 w-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
        />
      </svg>
    </button>
    <!-- Next button -->
    <button @click="nextImage()" class="z-10">
      <svg class="h-6 w-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
        />
      </svg>
    </button>
  </div>
</template>
