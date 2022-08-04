<template>
  <div>
    <nav class="p-4 border-b">
      <div class="flex flex-row justify-between">
        <div class="font-bold">
          <NuxtLink to="/">APOKON</NuxtLink>
        </div>
        <div class="grid grid-flow-col gap-2">
          <NuxtLink to="/history">History</NuxtLink>
          <NuxtLink to="/admissions">Admissions</NuxtLink>
        </div>
      </div>
      <div></div>
    </nav>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
