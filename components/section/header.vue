<script lang="ts" setup>
const route = useRoute();

function isRouteActive(path: string) {
  return route.path === path;
}

const useMenu = () => {
  const isMenuActive = ref(false);
  const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
  };

  const expandMenu = () => {
    isMenuActive.value = true;
  };

  const collapseMenu = () => {
    isMenuActive.value = false;
  };

  return {
    isMenuActive,
    toggleMenu,
    expandMenu,
    collapseMenu,
  };
};

const { isMenuActive, toggleMenu, collapseMenu } = useMenu();
</script>

<template>
  <nav class="border-b">
    <div class="bg-white p-4 flex flex-row justify-between items-center">
      <!-- Logo -->
      <div class="bg-slate-500 rounded-full overflow-clip">
        <NuxtLink to="/">
          <img
            src="/logo.png"
            alt="Apokon Elementary School Logo"
            class="h-12 w-12"
          />
        </NuxtLink>
      </div>

      <!-- Hide in small devices -->
      <div class="sm:grid hidden grid-flow-col gap-2">
        <NuxtLink
          class="p-2 rounded-md hover:bg-blue-200"
          :class="{
            'bg-blue-200': isRouteActive('/history'),
          }"
          to="/history"
        >
          History
        </NuxtLink>
        <NuxtLink
          class="p-2 rounded-md hover:bg-blue-200"
          :class="{
            'bg-blue-200': isRouteActive('/admissions'),
          }"
          to="/admissions"
        >
          Admissions
        </NuxtLink>
      </div>
      <!-- Show in small devices -->
      <div class="inline-block sm:hidden">
        <!-- menu button -->
        <button class="p-2 rounded-md" @click="toggleMenu()">
          <!-- Menu Icon -->
          <svg
            v-if="!isMenuActive"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <!-- X Icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile list menu -->
    <div class="overflow-clip bg-slate-50">
      <div class="block sm:hidden" v-if="isMenuActive">
        <NuxtLink
          class="block p-4 hover:bg-blue-200"
          :class="{
            'bg-blue-200': isRouteActive('/history'),
          }"
          to="/history"
        >
          History
        </NuxtLink>
        <NuxtLink
          class="block p-4 hover:bg-blue-200"
          :class="{
            'bg-blue-200': isRouteActive('/admissions'),
          }"
          to="/admissions"
        >
          Admissions
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
