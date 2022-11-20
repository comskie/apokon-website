<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator :height="2" color="#6366f1" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from "#imports";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Apokon Elementary School`
      : "Apokon Elementary School";
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});
</script>
