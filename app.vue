<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import 'tw-elements';
import {useHead} from "#imports";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Apokon Elementary School` : 'Apokon Elementary School';
  },
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
  ],
})
</script>
