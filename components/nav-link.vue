<script setup lang="ts">

defineProps({
  to: {
    required: true,
    type: String,
  },
});

</script>

<template>
  <div>
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </div>
</template>
