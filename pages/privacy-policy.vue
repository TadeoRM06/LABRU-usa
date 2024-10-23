<template>
    <div class="min-h-screen max-w-screen-xl mx-auto bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 mt-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="h2 font-bold mb-8 text-center text-primary">
          Privacy Policy
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
            this Privacy Policy.
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
          This Privacy Policy outlines how LA BRU ("we," "our," or "us") collects, uses, and protects your information when you visit our website, www.labru.com (the "Website") and use our services. By accessing our Website, you consent to the terms of this Privacy Policy.
        </p>
      `
    },
    {
      title: "2. Information We Collect",
      content: `
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            We may collect the following types of information:
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Personal Identification Information: Name, email address and phone number.</li>
            <li>Non-Personal Identification Information: Browser type, Internet Service Provider (ISP), referring/exit pages, and date/time stamps.</li>
          </ul>
        </div>
      `
    },
    {
      title: "3. How We Use Your Information",
      content: `
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            We use the information we collect for various purposes, including:
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>To process transactions and deliver products and services.</li>
            <li>To improve our website and services.</li>
            <li>To communicate with you, including sending you updates, promotional materials, and customer support.</li>
            <li>To comply with legal obligations and enforce our terms and conditions.</li>
          </ul>
        </div>
      `
    },
    {
      title: "4. How We Protect Your Information",
      content: `
        <div>
          <p class="text-gray-300 leading-relaxed">
            We take the security of your personal information seriously and implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
          </p>
        </div>
      `
    },
    {
      title: "5. Sharing Your Information",
      content: `
        <div>
          <p class="text-gray-300 leading-relaxed mb-4">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide services to you, with your consent, or as required by law.
          </p>
        </div>
      `
    },
    {
      title: "6. Your Rights",
      content: `
        <div>
          <p class="text-gray-300 leading-relaxed">
            You have the right to request access to the personal information we hold about you, to request corrections to any inaccuracies, and to request the deletion of your personal information. Please contact us to exercise these rights.
          </p>
        </div>
      `
    },
    {
      title: "7. Changes to This Privacy Policy",
      content: `
        <div>
          <p class="text-gray-300 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </div>
      `
    },
    {
      title: "8. Contact Us",
      content: `
        <div class="bg-gray-700 p-6 rounded-lg">
          <p class="text-gray-300 mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
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
  