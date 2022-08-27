<script lang="ts" setup>
import "@fancyapps/ui/dist/fancybox.esm";
import "@fancyapps/ui/dist/fancybox.css";
</script>

<template>
  <div class="py-12 px-4">
    <div>
      <span class="font-semibold text-lg">This Is Album 1</span>
      <div class="mt-2 grid sm:grid-cols-6 grid-cols-2 gap-4">
        <img
          src="https://api.lorem.space/image/face?hash=3uhoa9si"
          alt="Image 1"
          class="w-40 h-40 object-cover object-center rounded-md hover:cursor-pointer"
          data-fancybox="gallery"
        />
        <img
          src="https://api.lorem.space/image/face?hash=d91kai5n"
          alt="Image 1"
          class="w-40 h-40 object-cover object-center rounded-md hover:cursor-pointer"
          data-fancybox="gallery"
        />
        <img
          src="https://api.lorem.space/image/face?hash=psrx040e"
          alt="Image 1"
          class="w-40 h-40 object-cover object-center rounded-md hover:cursor-pointer"
          data-fancybox="gallery"
        />
        <img
          src="https://api.lorem.space/image/face?hash=zhvt1cpa"
          alt="Image 1"
          class="w-40 h-40 object-cover object-center rounded-md hover:cursor-pointer"
          data-fancybox="gallery"
        />
        <img
          src="https://api.lorem.space/image/face?hash=k36y1hj7"
          alt="Image 1"
          class="w-40 h-40 object-cover object-center rounded-md hover:cursor-pointer"
          data-fancybox="gallery"
        />
        <NuxtLink
          to="/gallery/album-1"
          class="w-40 h-40 bg-slate-100 hover:bg-slate-200 rounded-md"
        >
          <div class="flex justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
