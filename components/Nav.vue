<template>
  <nav class="border-primary-light bg-gray-950 md:bg-black fixed w-full top-0 left-0 shadow-md z-50 ">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 shadow-2xl">
      <!-- Logo -->
      <NuxtLink href="/" class="flex items-center">
        <img src="/images/LOGO LETRAS-.png" class="h-16 lg:h-14" alt="LA BRU Logo" />
      </NuxtLink>

      <!-- Menu Button for Mobile -->
      <button @click="toggleMenu" data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden border  "
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <!-- Menu Items and Social Icons for Desktop -->
      <div class="hidden md:flex md:items-center">
        <ul class="flex space-x-8 md:space-x-6">
          <li>
            <NuxtLink href="/#about" class="text-white hover:text-primary">About Us</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/#creamale" class="text-white hover:text-primary">Cream Ale</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/#ipa" class="text-white hover:text-primary">IPA</NuxtLink>
          </li>
          <li>
            <a href="#lager" class="text-white hover:text-primary">Lager</a>
          </li>
          <li>
            <NuxtLink href="/#ubication" class="text-white hover:text-primary">Location</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/#storytelling" class="text-white hover:text-primary">Storytelling</NuxtLink>
          </li>
        </ul>

        <!-- Social Icons for Desktop -->
        <div class="flex items-center ml-8 space-x-4">
          <a target="_blank" v-for="(social, index) in socialLinks" :key="index" :href="social.url"
            class="hover:opacity-80 transition-opacity duration-300">
            <NuxtImg :src="social.icon" :width="social.width" :height="social.height" 
            alt="Social media icon" />
        </a>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div :class="isMenuOpen ? 'block w-full slide-in' : 'hidden'" class="md:hidden" id="navbar-default">
        <ul class="flex flex-col mt-4">
          <li>
            <NuxtLink href="/#about" @click="toggleMenu" class="block py-2 px-4 text-center text-white hover:bg-primary-light">Who We Are</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/#creamale" @click="toggleMenu" class="block py-2 px-4 text-center text-white hover:bg-primary-light">Cream Ale</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/#ipa" @click="toggleMenu" class="block py-2 px-4 text-center text-white hover:bg-primary-light">IPA</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/#lager" @click="toggleMenu" class="block py-2 px-4 text-center text-white hover:bg-primary-light">Lager</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/#ubication" @click="toggleMenu" class="block py-2 px-4 text-center text-white hover:bg-primary-light">Location</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/#storytelling" @click="toggleMenu" class="block py-2 px-4 text-center text-white hover:bg-primary-light">Storytelling</NuxtLink>
          </li>
        </ul>
        <div class="flex items-center justify-center mt-4 space-x-4">
          <NuxtLink v-for="(social, index) in socialLinks" :key="index" :href="social.url"
            class="hover:opacity-80 transition-opacity duration-300">
            <NuxtImg :src="social.icon" :width="social.width" :height="social.height" alt="Social media icon" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const socialLinks = [
  { icon: '/icons/instagram.svg', url: 'https://www.instagram.com/drinklabru/', width: 40, height: 40 },
  { icon: '/icons/facebook.svg', url: 'https://www.facebook.com/profile.php?id=61564872046976', width: 30, height: 30 }
];

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
