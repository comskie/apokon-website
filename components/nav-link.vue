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
  <NuxtLink :class="[
    'tracking-wide font-medium hover:bg-indigo-50 hover:text-indigo-600 focus:bg-indigo-50 flex items-center uppercase text-sm',
    'sm:inline-block sm:border-b-2 sm:p-4 sm:justify-center',
    'block p-3 border-transparent',
    {
      'sm:border-b-indigo-600 font-semibold sm:border-r-0 border-r-2 border-r-indigo-600 text-indigo-600':
        isActive,
    },
  ]" :to="to">
    <slot />
  </NuxtLink>
</template>
