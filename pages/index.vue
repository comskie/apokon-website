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
    <carousel :images="images" />

    <div class="mt-4 flex items-center">
      <h1 class="text-3xl font-bold">Our School</h1>
    </div>
  </div>

</template>
