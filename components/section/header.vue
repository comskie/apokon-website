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

const { isMenuActive, toggleMenu } = useMenu();
</script>

<template>
  <nav class="border-b sm:px-4">
    <div class="bg-white flex flex-row justify-between items-stretch">
      <!-- Logo -->
      <nav-link to="/">
        <img
          src="/logo.png"
          alt="Apokon Elementary School Logo"
          class="h-12 w-12 rounded-full overflow-clip"
        />
      </nav-link>

      <!-- Hide in small devices -->
      <div class="sm:grid hidden grid-flow-col">
        <nav-link to="/history" :isActive="isRouteActive('/history')">
          History
        </nav-link>
        <nav-link to="/admissions" :isActive="isRouteActive('/admissions')">
          Admissions
        </nav-link>
      </div>
      <!-- Show in small devices -->
      <!-- menu button -->
      <div
        class="sm:hidden p-2 h-full inline-flex items-center justify-center my-auto"
      >
        <button
          class="p-2 rounded-full hover:bg-blue-200"
          @click="toggleMenu()"
        >
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
        <nav-link :isActive="isRouteActive('/history')" to="/history">
          History
        </nav-link>
        <nav-link :isActive="isRouteActive('/admissions')" to="/admissions">
          Admissions
        </nav-link>
      </div>
    </div>
  </nav>
</template>
