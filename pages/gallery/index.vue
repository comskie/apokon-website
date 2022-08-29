<script lang="ts" setup>
useHead({
  title: "Gallery",
});
</script>

<template>
  <div class="py-12 px-4">
    <div>
      <span class="font-semibold text-lg">This Is Album 1</span>
      <ImageGrid class="mt-2">
        <ImageTile
          v-for="i in 5"
          :key="i"
          :src="`https://api.lorem.space/image/face?hash=${i}`"
          :alt="`Image ${i}`"
          data-fancybox="view-album-1"
        />
        <NuxtLink
          to="/gallery/album-1"
          class="h-full w-full bg-slate-100 hover:bg-slate-200 rounded-md"
        >
          <div class="flex justify-center items-center h-full w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </NuxtLink>
      </ImageGrid>
    </div>
  </div>
</template>
