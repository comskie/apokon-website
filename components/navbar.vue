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
  <nav class="shadow-sm">
    <div class="bg-white flex flex-row items-stretch gap-4 sm:px-4">
      <!-- Nav Brand -->
      <NuxtLink
        to="/"
        class="inline-flex p-2 hover:text-indigo-500 items-center justify-center gap-2 hover:bg-indigo-50"
      >
        <img
          src="/logo.png"
          alt="Apokon Elementary School Logo"
          class="h-10 w-10 rounded-full overflow-clip inline"
        />
        <span
          class="font-semibold tracking-wide hidden sm:block text-indigo-500 uppercase"
        >
          Apokon Elementary School
        </span>
      </NuxtLink>

      <div class="flex-grow flex justify-end">
        <!-- Hide in small devices -->
        <div class="sm:grid hidden grid-flow-col">
          <NavLink to="/" :isActive="isRouteActive('/')"> Home </NavLink>
          <NavLink to="/history" :isActive="isRouteActive('/history')">
            History
          </NavLink>
          <NavLink to="/admissions" :isActive="isRouteActive('/admissions')">
            Admissions
          </NavLink>
          <NavLink to="/gallery" :isActive="isRouteActive('/gallery')">
            Gallery
          </NavLink>
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
    </div>
    <!-- Mobile list menu -->
    <div class="overflow-clip bg-slate-50">
      <div class="block sm:hidden" v-if="isMenuActive">
        <NavLink to="/" :isActive="isRouteActive('/')"> Home </NavLink>
        <NavLink :isActive="isRouteActive('/history')" to="/history">
          History
        </NavLink>
        <NavLink :isActive="isRouteActive('/admissions')" to="/admissions">
          Admissions
        </NavLink>
        <NavLink to="/gallery" :isActive="isRouteActive('/gallery')">
          Gallery
        </NavLink>
      </div>
    </div>
  </nav>
</template>
