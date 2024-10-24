<template>
    <section id="lager" class="relative mx-auto">
        <div class="absolute inset-0 -z-10 mx-0 sm:mx-0 lg:mx-0 xl:mx-0 rounded-t-[3rem] pointer-events-none overflow-x-hidden">
            <div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  class="w-full h-full">
                    <defs>
                        <path id="a" d="M0 0h2324v658H0z" />
                        <path id="b" d="M0 0h2324v658H0z" />
                        <radialGradient id="c" cx="50%" cy="0%" r="85.751%" fx="50%" fy="0%"
                            gradientTransform="matrix(0 1 -.28313 0 .5 -.5)">
                            <stop offset="0%" stop-color="#BCC5DB" />
                            <stop offset="22.35%" stop-color="#5c81aa" stop-opacity=".64" />
                            <stop offset="100%" stop-color="#5c81aa" stop-opacity="0" />
                        </radialGradient>
                        <linearGradient id="d" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                            <stop offset="0%" stop-color="#FFF" />
                            <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
                        </linearGradient>
                        <filter id="e" width="165.1%" height="170.3%" x="-32.5%" y="-35.1%" filterUnits="objectBoundingBox">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                        </filter>
                    </defs>
                    <g fill="none" fill-rule="evenodd" transform="translate(-460)">
                        <mask id="f" fill="#fff">
                            <use xlink:href="#b" />
                        </mask>
                        <use xlink:href="#b" fill="url(#c)" />
                        <path fill="url(#d)" d="m629-216 461 369-284 58z" filter="url(#e)" mask="url(#f)" />
                    </g>
                </svg>
            </div>
        </div>
        <div class="relative max-w-6xl mx-auto z-10">
            <div class="">
                <div class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
                    <!-- Image (Left Side) -->
                    <div class="md:mt-0 w-full md:w-5/12 lg:w-1/2 flex justify-center items-center mx-0" data-aos="fade-up" data-aos-delay="100">
                        <div class="md:mt-0 relative h-full left-0 md:left-0 mx-0">
                            <img src="/images/beers/lager/lagerBg2.png" 
                                class="w-full h-auto md:h-[100vh] max-h-[1000px] object-contain relative z-0 mx-0 mt-40 md:mt-0" />
                        </div>
                    </div>
                    
                    <!-- Content (Right Side) -->
                    <div class="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center flex flex-col justify-center md:ml-10 md:pt-20"
                        data-aos="fade-down">
                        <h3 class="h3 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                            LAGER
                        </h3>
                        <p class="text-lg text-slate-400 mb-8 mx-7 md:mx-0 text-left">
                            In the heart of the Meseta Purepecha, where the whispers of our ancestors echo through the fields, lies a treasure of our heritage: Maíz Azul AKA Blue Corn. For over 7,000 years, this vibrant blue corn has been nurtured with wisdom and tender care, passed down through generations of dedicated farmers. Every kernel pulses with a story of love, tradition, and deep respect for our beautiful Mexico. Discover our magic
                        </p>
                        <div class="mt-8 w-72 md:max-w-xs max-md:mx-auto space-y-2">
                            <button
                                class="flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100"
                                :class="tab !== '1' ? 'border-slate-700 opacity-50' : 'border-[#5B7BAA] shadow shadow-[#5B7BAA]'"
                                @click.prevent="tab = '1'">
                                <span>Color: Pale Gold</span>
                            </button>
                            <button
                                class="flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100"
                                :class="tab !== '4' ? 'border-slate-700 opacity-50' : 'border-[#5B7BAA] shadow shadow-[#5B7BAA]'"
                                @click.prevent="tab = '4'">
                                <span>Calories: 114</span>
                            </button>
                            <button
                                class="flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100"
                                :class="tab !== '5' ? 'border-slate-700 opacity-50' : 'border-[#5B7BAA] shadow shadow-[#5B7BAA]'"
                                @click.prevent="tab = '5'">
                                <span>Alc: 3.8%</span>
                            </button>
                            <button
                                class="flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100"
                                :class="tab !== '2' ? 'border-slate-700 opacity-50' : 'border-[#5B7BAA] shadow shadow-[#5B7BAA]'"
                                @click.prevent="tab = '2'">
                                <span>SRM: 3</span>
                            </button>
                            <button
                                class="flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100"
                                :class="tab !== '3' ? 'border-slate-700 opacity-50' : 'border-[#5B7BAA] shadow shadow-[#5B7BAA]'"
                                @click.prevent="tab = '3'">
                                <span>IBU: 11</span>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- New Section for Text and Image -->
            <div class="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 pb-12 md:pb-20">
                <div class="w-full md:w-2/3 text-center md:text-left mr-4 py-6">
                    <p class="text-lg text-slate-400 mx-10 text-left">
                        Two million years ago, the earth shifted around a fracture called Clarion, and a legend stood up to 5200 meters. Some say that she was the daughter of a king, others believe she was a woman destined to be an empress, and so many affirm that she was the most beautiful woman. Everyone agrees that her snowy peaks protect what was once a great love.
                    </p>
                </div>
                <div class="flex justify-center items-start w-full md:w-1/3 mt-4 md:mt-0">
                    <img src="/images/beers/lager/image.png" alt="Beer" class="h-56 object-contain" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Features',
    setup() {
        const tab = ref('1')
        return {
            tab,
        }
    },
}
</script>