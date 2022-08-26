<script lang="ts" setup>
import { useHead } from "#imports";

useHead({
  title: "Home",
});

const images = [
  "/images/carousel_1.jpg",
  "/images/carousel_2.jpg",
  "/images/carousel_3.jpg",
];
</script>

<template>
  <div>
    <carousel :images="images" :auto-slide-dynamic-direction="true" />

    <div class="grid md:grid-cols-2 gap-4 grid-cols-1 sm:p-12 p-4">
      <div class="flex items-center">
        <h2 class="text-center font-bold text-3xl">
          APOKON ELEMENTARY SCHOOL Project WATCH 2021- KICK-OFF PROGRAM
        </h2>
      </div>
      <div class="flex items-center">
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/2llySz5u5cs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
