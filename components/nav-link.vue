<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <NuxtLink
    class=" text-sm tracking-wide p-2 block sm:inline-flex items-center justify-center h-full hover:bg-blue-200/50 focus:bg-none"
    :class="{
    'focus:bg-blue-200/50 border-r-2 sm:border-r-0 sm:border-b-2 border-blue-500 text-blue-500': isActive
  }" :to="to">
    <slot/>
  </NuxtLink>
</template>
