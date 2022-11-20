<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="src">
    <nuxt-img
      class="aspect-square object-cover object-center rounded hover:cursor-pointer hover:opacity-60 ease-linear transition-opacity"
      :src="src"
      :alt="alt"
      fit="cover"
      width="300"
      height="300"
      quality="50"
      format="webp"
      loading="lazy"
    />
  </a>
</template>
