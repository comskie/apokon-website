<script lang="ts" setup>
defineProps({
  src: String,
  alt: String,
});
</script>

<template>
  <img
    class="aspect-square h-full w-full object-cover object-center rounded hover:cursor-pointer hover:opacity-60 ease-linear transition-opacity"
    :src="src"
    :alt="alt"
  />
</template>
