// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-aos',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  runtimeConfig: {
    // Aquí se definen las variables de entorno
    public: {
      apiKey: process.env.MAPS_API_KEY
    },
    private: {
      resendApiKey: process.env.RESEND_API_KEY, // Clave privada
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
});