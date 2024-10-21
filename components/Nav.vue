<template>
  <nav class="border-primary-light bg-gray-950 md:bg-black fixed w-full top-0 left-0 shadow-md z-50">
    <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 shadow-2xl"> <!-- Cambiado a max-w-screen-2xl -->
      <!-- Logo -->
      <NuxtLink href="/" class="flex items-center">
        <img src="/images/LOGO LETRAS-.png" class="h-16" alt="LA BRU Logo" />
      </NuxtLink>

      <!-- Menu Button for Mobile -->
      <button @click="toggleMenu" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <!-- Menu Items -->
      <div :class="isMenuOpen ? 'block w-full slide-in' : 'hidden' + ' md:block md:w-auto'" id="navbar-default">
        <ul class="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
          <li>
            <a href="#about" class="block py-2 px-4 text-right text-gray-900 hover:bg-primary-light md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white">Who We Are</a>
          </li>
          <li>
            <a href="#beers" class="block py-2 px-4 text-right text-gray-900 hover:bg-primary-light md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white">Lager</a>
          </li>
          <li>
            <a href="#story" class="block py-2 px-4 text-right text-gray-900 hover:bg-primary-light md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white">Cream Ale</a>
          </li>
          <li>
            <a href="#find" class="block py-2 px-4 text-right text-gray-900 hover:bg-primary-light md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white">IPA</a>
          </li>
          <li>
            <a href="#find" class="block py-2 px-4 text-right text-gray-900 hover:bg-primary-light md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white">Storytelling</a>
          </li>
          <li>
            <a href="#find" class="block py-2 px-4 text-right text-gray-900 hover:bg-primary-light md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white">Ubication</a>
          </li>
        </ul>
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
/* Animación personalizada para deslizamiento desde la derecha */
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
