<script lang="ts" setup>
import { Fancybox } from "@fancyapps/ui/dist/fancybox.esm";

defineProps({
  albumSlug: String,
  images: {
    type: Array<{
      image: string;
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
        v-for="image, index in images"
        :key="index"
        :src="image.image"
        :alt="image.alt"
        :data-fancybox="`album-${albumSlug}`"
      />
    </div>
  </div>
</template>
