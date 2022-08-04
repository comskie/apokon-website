<template>
  <div class="grid grid-cols-3 gap-4 p-4">
    <div
      class="bg-slate-400 rounded-md flex gap-4 items-center justify-center flex-col p-4"
    >
      <div class="rounded-full h-52 w-52 bg-lime-500"></div>
      <p class="font-bold">Apokon Elementary School</p>
    </div>
    <div class="col-span-2">
      <span>Our School</span>
      <div>carousel</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import "animate.css";

import { useHead } from "#imports";

useHead({
  title: "Home",
});
</script>
