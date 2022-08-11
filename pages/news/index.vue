<script lang="ts" setup>
const res = await useFetch("https://apokon-cms.herokuapp.com/api/posts");

const { data: posts } = res.data.value as { data: Post[] };
</script>

<template>
  <div class="px-4 py-12">
    <div class="grid gap-6 place-content-center">
      <div
        v-for="post in posts"
        class="w-full rounded-md box-border shadow-sm border"
        :key="post.slug"
        :id="post.slug"
      >
        <NuxtLink :to="`/news/${post.slug}`">
          <img
            :src="post.cover_image_url"
            :alt="post.title"
            class="object-cover object-center rounded-t-md h-48 w-full"
          />
          <div class="p-4 rounded-b-md w-full max-w-3xl">
            <h2 class="text-2xl font-bold hover:text-indigo-600">
              {{ post.title }}
            </h2>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
