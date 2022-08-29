<script lang="ts" setup>
import { Fancybox } from "@fancyapps/ui/dist/fancybox.esm";

Fancybox.bind("[data-fancybox]", {
  Toolbar: {
    display: ["zoom", "fullscreen", "thumbs", "close"],
  },
});
</script>

<template>
  <div class="container">
    <div class="grid sm:grid-cols-6 grid-cols-3 gap-4">
      <slot />
    </div>
  </div>
</template>
