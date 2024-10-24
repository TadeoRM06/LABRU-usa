<template>
    <div>
      <!-- Metadatos para SEO y OpenGraph -->
      <Head>
        <title>{{ title }}</title>
        <meta name="description" :content="description" />
        <meta name="keywords" :content="keywords" />
        <meta name="robots" content="index, follow" />

        <!-- OpenGraph -->
        <meta property="og:title" :content="ogTitle" />
        <meta property="og:description" :content="ogDescription" />
        <meta property="og:image" :content="ogImage" />
        <meta property="og:url" :content="ogUrl" />
        <meta property="og:type" content="website" />
        <!-- Idiomas -->
        <meta property="og:locale" content="en_US" />
        <!-- Ubicación -->
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <!-- Mobile -->
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#your-brand-color" />
        <!-- Enlaces -->
        <link rel="canonical" :href="canonical" />
      </Head>
  
      <!-- Secciones con IDs para mejor navegación -->
      <Welcome id="/" class="section" />
      <About id="about" class="section" />
      <CreamAle id="creamale" class="section" />
      <IPA id="ipa" class="section" />
      <Lager id="lager" class="section" />
      <Map id="ubication" class="section" />
      <History id="storytelling" class="section" />
      <New id="novedades" class="section" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Metadatos optimizados para una single page
  const title = ref('LA BRU Beer | Mexican Craft Beer in Northgate Market Los Angeles');
  const description = ref('Discover LA BRU Beer in Northgate Market Los Angeles. Authentic Mexican craft beer: Cream Ale, IPA, and Lager. Find our premium beers at your nearest Northgate Market.');
  const keywords = ref('LA BRU Beer, Mexican craft beer, Northgate Market Los Angeles, cream ale, IPA, lager, Mexican beer, craft beer Los Angeles');
  
  const ogTitle = ref('LA BRU Beer | Mexican Craft Beer at Northgate Market LA');
  const ogDescription = ref('Experience authentic Mexican craft beer at Northgate Market Los Angeles. Premium brews including Cream Ale, IPA, and Lager. Visit your local Northgate Market today.');
  const ogImage = ref('https://www.drinklabru.com/Images/logoOG.webp');
  const ogUrl = ref('https://www.drinklabru.com');
  const canonical = ref('https://www.drinklabru.com');
  
  // Schema.org optimizado para single page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LA BRU Beer",
    "url": "https://www.drinklabru.com",
    "logo": "https://www.drinklabru.com/Images/logo.webp",
    "description": "Authentic Mexican craft brewery",
    "sameAs": [
      "https://facebook.com/labrubeer",
      "https://instagram.com/labrubeer"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "LA BRU Beer Products",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "LA BRU Cream Ale",
          "description": "Smooth and crisp cream ale",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Store",
              "name": "Northgate Market"
            }
          }
        },
        {
          "@type": "Product",
          "name": "LA BRU IPA",
          "description": "Hoppy and aromatic IPA"
        },
        {
          "@type": "Product",
          "name": "LA BRU Lager",
          "description": "Traditional Mexican lager"
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "Los Angeles",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    }
  };
  
  // Configuración de metadatos y schema
  useHead({
    title: title.value,
    meta: [
      { name: 'description', content: description.value },
      { name: 'keywords', content: keywords.value },
      { property: 'og:title', content: ogTitle.value },
      { property: 'og:description', content: ogDescription.value },
      { property: 'og:image', content: ogImage.value },
      { property: 'og:url', content: ogUrl.value },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'geo.region', content: 'US-CA' },
      { name: 'geo.placename', content: 'Los Angeles', }
    ],
    link: [
      { rel: 'canonical', href: canonical.value }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(structuredData)
      }
    ]
  });
  
  // Configuración del sitemap para single page
  const sitemap = {
    hostname: 'https://www.drinklabru.com',
    gzip: true,
    routes: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toISOString()
      }
    ]
  };
  </script>
  
  <style scoped>
  .section {
    scroll-margin-top: 100px; /* Para navegación suave con header fijo */
  }
  </style>
  