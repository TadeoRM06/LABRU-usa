<template>
    <div class="min-h-screen max-w-screen-xl mx-auto bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 mt-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="h2 font-bold mb-8 text-center text-primary">
          Terms and Conditions
        </h1>
  
        <div class="space-y-8">
          <section v-for="(section, index) in sections" :key="index" class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div 
              @click="toggleSection(index)"
              class="p-6 cursor-pointer flex justify-between items-center hover:bg-gray-700 transition-colors duration-300"
            >
              <h2 class="text-2xl font-semibold">{{ section.title }}</h2>
              <ChevronDownIcon 
                :class="{'transform rotate-180': openSections[index]}"
                class="w-6 h-6 transition-transform duration-300"
              />
            </div>
            <div v-show="openSections[index]" class="p-6 bg-gray-750">
              <div v-html="section.content"></div>
            </div>
          </section>
        </div>
  
        <div class="mt-12 text-center">
          <p class="text-gray-400 italic">
            By using our Website and services, you acknowledge that you have read, understood, and agree to be bound by 
            these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const sections = [
    {
      title: "1. Introduction",
      content: `
        <p class="text-gray-300 leading-relaxed">
          Welcome to LA BRU ("we," "our," or "us"). By accessing and using www.labru.com (the "Website") and our services, 
          you agree to comply with and be bound by these Terms and Conditions ("Terms"). Please read these Terms carefully 
          before using our Website or services.
        </p>
      `
    },
    {
      title: "2. Age Verification",
      content: `
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            2.1. LA BRU produces and sells alcoholic beverages. By using our Website and services, you confirm that you 
            are of legal drinking age in your jurisdiction.
          </p>
          <p class="text-gray-300 leading-relaxed">
            2.2. We reserve the right to request age verification at any time and to refuse service if adequate 
            verification cannot be provided.
          </p>
        </div>
      `
    },
    {
      title: "3. Product Information",
      content: `
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            3.1. We strive to provide accurate product descriptions, images, and information. However:
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Colors may vary depending on your display settings</li>
            <li>Product availability is subject to change without notice</li>
            <li>Alcohol content and other specifications may vary slightly between batches</li>
          </ul>
        </div>
      `
    },
    {
      title: "4. Intellectual Property",
      content: `
        <div>
          <p class="text-gray-300 leading-relaxed mb-4">
            4.1. All content on this Website, including but not limited to:
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Trademarks</li>
            <li>Logos</li>
            <li>Images</li>
            <li>Text</li>
            <li>Recipes</li>
            <li>Brand stories</li>
            <li>Design elements</li>
          </ul>
          <p class="text-gray-300 leading-relaxed mt-4">
            are the exclusive property of LA BRU and are protected by applicable intellectual property laws.
          </p>
        </div>
      `
    },
    {
      title: "5. Responsible Consumption",
      content: `
        <div class="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-lg">
          <p class="text-white leading-relaxed mb-2">
            LA BRU promotes responsible alcohol consumption. We reserve the right to:
          </p>
          <ul class="list-disc list-inside text-white space-y-2 ml-4">
            <li>Refuse service to anyone who appears to be intoxicated</li>
            <li>Limit purchase quantities</li>
            <li>Report suspicious ordering patterns</li>
            <li>Terminate accounts that violate our responsible consumption policies</li>
          </ul>
        </div>
      `
    },
    {
      title: "6. Contact Information",
      content: `
        <div class="bg-gray-700 p-6 rounded-lg">
          <p class="text-gray-300 mb-4">For questions about these Terms, please contact us at:</p>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center">
              <span class="font-semibold mr-2">Email:</span> contact@labru.com
            </li>
            <li class="flex items-center">
              <span class="font-semibold mr-2">Phone:</span> +1 251 786 3876
            </li>
            <li class="flex items-center">
              <span class="font-semibold mr-2">Location:</span> Morelia, México
            </li>
          </ul>
        </div>
      `
    }
  ];
  
  const openSections = ref(sections.map(() => false));
  
  const toggleSection = (index) => {
    openSections.value[index] = !openSections.value[index];
  };
  </script>
  
  <style scoped>
  .bg-gray-750 {
    background-color: rgba(31, 41, 55, 0.5);
  }
  </style>