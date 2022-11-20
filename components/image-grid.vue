<script lang="ts" setup>
import { Fancybox } from "@fancyapps/ui/dist/fancybox.esm";

defineProps({
  albumSlug: String,
  images: {
    type: Array<{
      path: string;
      alt: string;
    }>,
    required: true,
  },
});

Fancybox.bind("[data-fancybox]", {
  Toolbar: {
    display: ["zoom", "fullscreen", "thumbs", "close"],
  },
});
</script>

<template>
  <div class="container">
    <div class="grid sm:grid-cols-6 md:grid-cols-7 grid-cols-3 gap-4">
      <ImageTile
        v-for="(image, index) in images"
        :key="index"
        :src="image.path"
        :alt="image.alt"
        :data-fancybox="`album-${albumSlug}`"
      />
      <!-- Extract ImageTile component, somehow, it does not work as expected. 
        Expected behavior: when an image is clicked, it should open a fancybox gallery 
        and display its original image.
        Actual behavior: when an image is clicked, it displays the thubmnail image
       -->

      <!-- <a v-for="(image, index) in images" :key="index" :href="image.path">
        <nuxt-img
          class="aspect-square object-cover object-center rounded hover:cursor-pointer hover:opacity-60 ease-linear transition-opacity"
          :src="image.path"
          :alt="image.alt"
          fit="cover"
          width="300"
          height="300"
          quality="50"
          format="webp"
          loading="lazy"
          :data-fancybox="`album-${albumSlug}`"
        />
      </a> -->
    </div>
  </div>
</template>
