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
    public: {
      apiKey: process.env.MAPS_API_KEY,
    },
    private: {
      resendApiKey: process.env.RESEND_API_KEY,
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: [
        '/sitemap.xml',
        '/',
      ]
    }
  },
  site: {
    url: 'https://www.drinklabru.com'
  },
  sitemap: {
    urls: ['/'],
    exclude: [
      '/privacy-policy',
      '/terms-conditions'
    ],
  },
  robots: {
    rules: [
      {
        UserAgent: '*',
        Disallow: '/privacy-policy',
        Allow: '/'
      },
      {
        UserAgent: '*',
        Disallow: '/terms-conditions'
      }
    ],
    sitemap: 'https://www.drinklabru.com/sitemap.xml'
  }
});