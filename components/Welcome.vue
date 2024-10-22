<template>
  <div class="relative h-[90vh] bg-cover bg-center mt-24" style="background-image: url('/images/welcome/image.png');">
    <!-- Capa de difuminado negro que empieza en 3/4 de la imagen -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/95" style="background: linear-gradient(to bottom, transparent 75%, rgba(0, 0, 0, 0.95) 100%);"></div>
    
    <!-- Texto centrado con efecto vidrio, movido hacia arriba -->
    <div class="absolute inset-0 flex flex-col items-center justify-start px-4 mt-4" data-aos="fade-up">
      <h1 class="h3 W text-white bg-black bg-opacity-5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-10 text-center">
        REMEMBER EL SABOR DE MÉXICO WITH 
        <span class="text-primary"><br/>LA BRU</span>
      </h1>
    </div>

    <!-- Botón al final -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <button class="relative rounded-full w-[30vh] bg-primary-light text-white py-3 px-6 transition duration-300 ease-in-out hover:bg-primary transform scale-100 flex items-center justify-center animate-pulse">
        FIND US      
        <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m0 0l-4-4m4 4l4-4" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
</script>

<style scoped>
/* Animación de pulsación para el botón */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Aplicar la animación de pulsación siempre */
.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
