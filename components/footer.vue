<template>
  <div class="p-12 bg-[#111926]">
    <div class="flex justify-center">
      <form
        action="https://formsubmit.co/d371b9289942a9f0e32064bc7f8dfb3b"
        method="POST"
      >
        <div class="w-96 flex flex-col gap-2">
          <div class="font-bold text-2xl text-indigo-500">Contact Us</div>
          <input
            placeholder="Name"
            class="rounded-md"
            type="text"
            name="name"
            required
          />
          <input
            placeholder="Email Address"
            class="rounded-md"
            type="email"
            name="email"
            required
          />
          <textarea
            name="message"
            class="rounded-md"
            cols="30"
            rows="5"
            required
            placeholder="Message"
          ></textarea>
          <div class="flex justify-end">
            <button
              class="px-4 py-2 text-white text-sm rounded-md bg-indigo-600 inline-flex flex-row gap-2 hover:bg-indigo-700 focus:bg-indigo-700 focus:ring-indigo-400 focus:ring"
              type="submit"
            >
              Send

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="mt-4 flex justify-between items-center text-white">
      <div>© Copyright 2022. All rights reserved.</div>
      <div class="flex flex-row gap-2">
        <a
          href="https://www.facebook.com/AES128768.gov.ph"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center flex-col hover:text-slate-300"
        >
          <svg
            class="h-6 w-6 fill-[#4267B2]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
            />
          </svg>
          <span class="text-sm sm:inline hidden">Facebook</span>
        </a>
        <a
          href="https://www.youtube.com/channel/UCwON0arMsTUkO0gwLb-mdhA"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center flex-col hover:text-slate-300"
        >
          <svg
            class="h-6 w-6 fill-[#FF0000]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
          </svg>
          <span class="text-sm sm:inline hidden">YouTube</span>
        </a>
      </div>
    </div>
  </div>
</template>
