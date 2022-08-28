<template>
  <div class="py-12 px-4">
    <span class="font-semibold text-lg">This Is Album 1</span>
    <ImageGrid class="mt-2">
      <ImageTile v-for="i in 20" :key="i"
        :src="`https://api.lorem.space/image/face?hash=${i}`"
        :alt="`Image ${i}`"
        data-fancybox="view"
      />
    </ImageGrid>
  </div>
</template>
