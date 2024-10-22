<template>
  <nav class="border-primary-light bg-gray-950 md:bg-black fixed w-full top-0 left-0 shadow-md z-50">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 shadow-2xl">
      <!-- Logo -->
      <NuxtLink href="/" class="flex items-center">
        <img src="/images/LOGO LETRAS-.png" class="h-16" alt="LA BRU Logo" />
      </NuxtLink>

      <!-- Menu Button for Mobile -->
      <button @click="toggleMenu" data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <!-- Menu Items and Social Icons for Desktop -->
      <div class="hidden md:flex md:items-center">
        <ul class="flex space-x-8">
          <li>
            <a href="#about" class="text-white hover:text-primary">Who We Are</a>
          </li>
          <li>
            <a href="#beers" class="text-white hover:text-primary">Lager</a>
          </li>
          <li>
            <a href="#story" class="text-white hover:text-primary">Cream Ale</a>
          </li>
          <li>
            <a href="#find" class="text-white hover:text-primary">IPA</a>
          </li>
          <li>
            <a href="#find" class="text-white hover:text-primary">Storytelling</a>
          </li>
          <li>
            <a href="#find" class="text-white hover:text-primary">Ubication</a>
          </li>
        </ul>
        <!-- Social Icons for Desktop -->
        <div class="flex items-center ml-8 space-x-4">
          <NuxtLink href="#" class="text-white hover:text-primary flex items-center justify-center w-10 h-10">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#ff8000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                style="mix-blend-mode: normal">
                <g transform="scale(8,8)">
                  <path
                    d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z">
                  </path>
                </g>
              </g>
            </svg>
          </NuxtLink>
          <NuxtLink href="#" class="text-white hover:text-primary flex items-center justify-center w-7 h-7">
            <svg fill="#ff8000" height="100%" width="100%" version="1.1" id="Layer_1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310"
              xml:space="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="XMLID_834_">
                  <path id="XMLID_835_"
                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z">
                  </path>
                </g>
              </g>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div :class="isMenuOpen ? 'block w-full slide-in' : 'hidden'" class="md:hidden" id="navbar-default">
        <ul class="flex flex-col mt-4">
          <li>
            <a href="#about" class="block py-2 px-4 text-center text-white hover:bg-primary-light">Who We Are</a>
          </li>
          <li>
            <a href="#beers" class="block py-2 px-4 text-center text-white hover:bg-primary-light">Lager</a>
          </li>
          <li>
            <a href="#story" class="block py-2 px-4 text-center text-white hover:bg-primary-light">Cream Ale</a>
          </li>
          <li>
            <a href="#find" class="block py-2 px-4 text-center text-white hover:bg-primary-light">IPA</a>
          </li>
          <li>
            <a href="#find" class="block py-2 px-4 text-center text-white hover:bg-primary-light">Storytelling</a>
          </li>
          <li>
            <a href="#find" class="block py-2 px-4 text-center text-white hover:bg-primary-light">Ubication</a>
          </li>
        </ul>
        <div class="flex items-center justify-center mt-4 space-x-4">
          <NuxtLink href="#" class="text-white hover:text-primary flex items-center justify-center w-10 h-10">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#ff8000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                style="mix-blend-mode: normal">
                <g transform="scale(8,8)">
                  <path
                    d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z">
                  </path>
                </g>
              </g>
            </svg>
          </NuxtLink>
          <NuxtLink href="#" class="text-white hover:text-primary flex items-center justify-center w-7 h-7">
            <svg fill="#ff8000" height="100%" width="100%" version="1.1" id="Layer_1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310"
              xml:space="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="XMLID_834_">
                  <path id="XMLID_835_"
                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z">
                  </path>
                </g>
              </g>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>


<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
@keyframes slideIn {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 0.4s ease-out;
}
</style>