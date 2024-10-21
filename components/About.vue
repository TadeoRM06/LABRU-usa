<template>
  <div class="flex flex-col mt-12 items-center h-screen bg-cover bg-center"
    style="background-image: url('/path-to-your-image.jpg');">
    <h2 class="text-4xl md:text-5xl font-bold text-white text-center">WHO SOMOS</h2>
    <p class="text-white text-center mt-4">Redescubre la nostalgia de México con LA BRU en cada chela, <br/>straight from
      Michoacán.</p>

    <!-- Imagen centrada -->
    <img src="/images/image.png" alt="Descripción de la imagen" class="w-[60%] md:w-[40%] lg:w-[20%]  h-auto mt-8" />
  </div>
</template>

<script setup>
const items = [
  { title: "Título 1", description: "Descripción del primer ítem.Descripción del primer ítem." },
  { title: "Título 2", description: "Descripción del segundo ítem.Descripción del primer ítem." },
  { title: "Título 3", description: "Descripción del tercer ítem.Descripción del primer ítem." },
];
</script>

<style scoped>
/* Puedes añadir estilos adicionales aquí si es necesario */
</style>
