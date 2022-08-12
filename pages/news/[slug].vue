<script lang="ts" setup>
const route = useRoute();

const res = await useFetch(
  `https://apokon-cms.herokuapp.com/api/posts?filter[slug]=${route.params.slug}`
);

const { data: posts } = res.data.value as { data: Post[] };
const post = posts[0];
</script>

<template>
  <div class="px-4 py-12">
    <div class="flex flex-col items-center justify-center w-full">
      <img :src="post.cover_image_url" :alt="post.title" class="h-96" />
      <div class="mt-4">
        <article class="prose">
          <h1>{{ post.title }}</h1>
          <div v-html="post.content"></div>
        </article>
      </div>
    </div>
  </div>
</template>
