// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    'nuxt-aos', 
    '@nuxt/image'
  ],
  runtimeConfig: {
    // Aquí se definen las variables de entorno
    public: {
      // Otras variables públicas si es necesario
    },
    private: {
      resendApiKey: process.env.RESEND_API_KEY // Clave privada
    }
  }
});