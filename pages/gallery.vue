<script lang="ts" setup>
useHead({
  title: "Gallery",
});

const { data: gallery } = {
  data: [
    {
      slug: "2022-division-kickoff-and-hanging-of-tarps",
      title: "BE 2022: DIVISION KICK-OFF & HANGING OF TARPS",
      path: "/images/gallery/2022-division-kickoff-and-hanging-of-tarps",
      length: 3,
    },
    {
      slug: "2022-school-kickoff-and-recorida",
      title: "BE 2022 SCHOOL KICK-OFF & RECORIDA",
      path: "/images/gallery/2022-school-kickoff-and-recorida",
      length: 7,
    },
  ],
};
</script>

<template>
  <div class="py-12 px-4">
    <div>
      <div v-for="album in gallery" :key="album.slug" class="first:mt-0 mt-12">
        <span class="font-semibold text-lg"> {{ album.title }} </span>
        <ImageGrid
          class="mt-2"
          :album-slug="album.slug"
          :images="Array.from({ length: album.length }).map((_, index) => ({
            path: `${album.path}/${index + 1}.jpg`,
            alt: `${album.title} ${index + 1}`,
          }))"
        />
      </div>
    </div>
  </div>
</template>
