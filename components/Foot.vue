<script setup lang="ts">
const socialLinks = [
    { icon: '/icons/instagram.svg', url: '#', width: 40, height: 40 },
    { icon: '/icons/facebook.svg', url: '#', width: 30, height: 30 }
];
</script>

<template>
    <footer class="bg-black text-white py-16 relative max-w-screen-xl mx-auto max-h-[90vh]"
        style="border-top: 2px solid; border-image: linear-gradient(to right, black, #FF8000, black) 1;">
        <!-- Contenedor principal con mejor espaciado -->
        <div class="container mx-auto px-4 md:px-8 lg:px-16">
            <!-- Grid de contenido principal -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                <!-- Sección de Cervezas -->
                <div class="text-center">
                    <h3 class="text-2xl font-semibold mb-6 text-white">Beers</h3>
                    <ul class="space-y-3">
                        <li>
                            <NuxtLink to="/#creamale" class="hover:text-orange-500 transition-colors duration-300">
                                Cream Ale
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#ipa" class="hover:text-orange-500 transition-colors duration-300">
                                IPA
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#lager" class="hover:text-orange-500 transition-colors duration-300">
                                Lager
                            </NuxtLink>
                        </li>
                    </ul>

                </div>

                <!-- Sección de Navegación -->
                <div class="text-center">
                    <h3 class="text-2xl font-semibold mb-6 text-white">Section</h3>
                    <ul class="space-y-3">
                        <li>
                            <NuxtLink to="/#about" class="hover:text-orange-500 transition-colors duration-300">
                                Who We Are
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#storytelling" class="hover:text-orange-500 transition-colors duration-300">
                                Storytelling
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#lager" class="hover:text-orange-500 transition-colors duration-300">
                                Ubication
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Sección de Contacto -->
                <div class="text-center">
                    <h3 class="text-2xl font-semibold mb-6 text-white">Contact</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center justify-center gap-2">
                            <span class="font-light">Phone:</span>
                            <NuxtLink :to="`tel:+12517863876`" class="hover:text-primary">+1 251 786 3876
                            </NuxtLink>
                        </li>
                        <li class="flex items-center justify-center gap-2">
                            <span class="font-light">Mail:</span>
                            <NuxtLink :to="`mailto:contact@labru.com`" class="hover:text-primary">
                                contact@labru.com</NuxtLink>
                        </li>
                        <li class="flex items-center justify-center gap-2">
                            <span class="font-light">Location:</span>
                            <NuxtLink :to="`https://maps.app.goo.gl/VAxjREiMcHqdU5m48`"
                                target="_blank" class="hover:text-primary">Morelia, México</NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Sección Social -->
                <div class="text-center">
                    <h3 class="text-2xl font-semibold mb-6 text-w">Social</h3>

                    <div class="flex justify-center space-x-6">
                        <a v-for="(social, index) in socialLinks" :key="index" :href="social.url"
                            class="hover:opacity-80 transition-opacity duration-300">
                            <NuxtImg :src="social.icon" :width="social.width" :height="social.height"
                                alt="Social media icon" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Sección de botellas -->
            <div class="mt-16 md:mt-28 flex justify-center">
                <div class="relative w-48 md:w-60 h-24">
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 transform -translate-x-8">
                        <NuxtImg src="/images/footer/Yellowbottle.png"
                            class="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                            alt="Yellow bottle" />
                    </div>
                    <div class="absolute right-0 top-1/2 -translate-y-1/2 transform translate-x-[4rem]">
                        <NuxtImg src="/images/footer/Blackbotte.png"
                            class="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                            alt="Black bottle" />
                    </div>
                </div>
            </div>

            <!-- Nueva sección de políticas y créditos -->
            <div class="mt-16 border-t border-gray-800 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <!-- Enlaces de políticas -->
                    <div class="flex space-x-6 text-sm text-gray-400">
                        <NuxtLink to="/privacy-policy" class="hover:text-orange-500 transition-colors duration-300">
                            Privacy Policy
                        </NuxtLink>
                        <NuxtLink to="/terms-conditions" class="hover:text-orange-500 transition-colors duration-300">
                            Terms & Conditions
                        </NuxtLink>
                    </div>

                    <!-- Créditos de desarrollo -->
                    <div class="text-sm text-gray-400">
                        Development By <NuxtLink to="https://gencodemx.com/" target="_blank"
                            class="text-blue-500 font-medium">GenCode</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>