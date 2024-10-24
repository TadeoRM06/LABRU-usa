<style scoped>
/* Animación para el botón */
.animate-pulse {
  animation: pulse 1s infinite;
}

.bg-custom-size {
  background-size: 70vh;
  /* Ajusta el tamaño como prefieras */
}

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

@media (max-width: 640px) {

  /* sm breakpoint */
  .bg-custom-size {
    background-size: 100%;
    /* Ajusta el tamaño como prefieras */
  }
}
</style>
<template>
  <!-- El formulario ya tiene @submit.prevent="handleSubmit" para manejar el envío -->
  <div class="flex items-center justify-center h-[100vh] max-h-[700px]  bg-center"
    style="background-image: url('/images/mancha.webp'); background-repeat: no-repeat; background-position: center;"
    data-aos="fade-up" data-aos-duration="1000">
    <div class="w-full max-w-md p-8 bg-opacity-80 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-duration="1000">
      <h2 class="h2 font-bold text-center text-white mb-8">NEWSLETTER</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <input v-model="email" type="email" placeholder="Example@gmail.com"
            class="w-full px-4 py-2 text-white bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 border-primary"
            :class="{ 'border-red-500': errors.email }" @input="validateEmail" required />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>
        <div class="flex items-center mb-4">
          <input v-model="isChecked" type="checkbox" id="promotions" class="mr-2 text-orange-500 focus:ring-primary"
            @change="validateCheckbox" />
          <label for="promotions" class="text-sm text-gray-300">
            I want to receive emails and promotions
          </label>
        </div>
        <p v-if="errors.checkbox" class="text-red-500 text-sm mb-2">{{ errors.checkbox }}</p>
        <a href="mailto:contact@labru.com" class="text-center text-primary mb-4 block">contact@labru.com</a>
        <div class="flex justify-center">
          <button type="submit"
            class="w-1/2 py-2 rounded-full text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            :class="{ 'animate-pulse': isLoading, 'opacity-50 cursor-not-allowed': !isFormValid }"
            :disabled="isLoading || !isFormValid">
            <span v-if="isLoading">Sending...</span>
            <span v-else>SEND</span>
          </button>
        </div>
      </form>
      <p v-if="isSubmitted" class="text-green-500 text-center mt-4">Thank you for subscribing!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const isChecked = ref(false)
const isSubmitted = ref(false)
const isLoading = ref(false)
const errors = ref({ email: '', checkbox: '' })

const isFormValid = computed(() => {
  return email.value && isChecked.value && !errors.value.email && !errors.value.checkbox
})

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value) {
    errors.value.email = 'Email is required'
  } else if (!emailPattern.test(email.value)) {
    errors.value.email = 'Please enter a valid email address'
  } else {
    errors.value.email = ''
  }
}

const validateCheckbox = () => {
  errors.value.checkbox = isChecked.value ? '' : 'You must accept to receive emails and promotions'
}

const handleSubmit = async () => {
  validateEmail()
  validateCheckbox()

  if (!isFormValid.value) {
    return
  }

  isLoading.value = true

  // Llamada al API para enviar el correo
  try {
    const response = await $fetch('/api/send', {
      method: 'POST',
      body: { email: email.value } // Envío del correo
    })
    console.log('Respuesta del servidor:', response)

    // Limpiar el formulario después del envío
    email.value = ''
    isChecked.value = false
    errors.value = { email: '', checkbox: '' }
    isSubmitted.value = true
  } catch (error) {
    console.error('Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>
