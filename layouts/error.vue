<template>
    <div class="error-page">
      <h1 v-if="error.statusCode === 504">Gateway Timeout (504)</h1>
      <p v-if="error.statusCode === 504">
        Lo sentimos, la solicitud tardó demasiado y no se pudo completar.
        Por favor, intenta de nuevo más tarde.
      </p>
      <h1 v-else>{{ error.statusCode }}</h1>
      <p v-else>
        {{ error.message }}
      </p>
      <NuxtLink to="/">Volver al inicio</NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps(['error'])
  </script>
  
  <style scoped>
  .error-page {
    text-align: center;
    margin-top: 100px;
  }
  </style>
  