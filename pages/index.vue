<script lang="ts" setup>
import { useHead } from "#imports";

useHead({
  title: "Home",
});

const images = [
  "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
];
</script>

<template>
  <div>
    <carousel :images="images" :auto-slide-dynamic-direction="true" />

    <div class="mt-4 flex items-center">
      <h1 class="text-3xl font-bold">Our School</h1>
    </div>
    <div class="grid md:grid-cols-2 gap-4 grid-cols-1">
      <div class="flex items-center">
        <h2 class="text-center font-bold text-3xl">
          APOKON ELEMENTARY SCHOOL Project WATCH 2021- KICK-OFF PROGRAM
        </h2>
      </div>
      <div class="">
        <iframe
          width="560"
          height="315"
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
