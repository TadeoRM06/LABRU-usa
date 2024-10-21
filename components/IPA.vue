<template>
<section class="relative mx-auto">
    <div class="absolute inset-0 -z-10 -mx-6 sm:-mx-12 lg:-mx-16 xl:-mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden">
        <div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1404"
                height="658">
                
                <defs>
                    <path id="a" d="M0 0h2324v658H0z" />
                    <path id="b" d="M0 0h2324v658H0z" />
                    <radialGradient id="c" cx="50%" cy="0%" r="106.751%" fx="50%" fy="0%"
                        gradientTransform="matrix(0 1 -.28313 0 .5 -.5)">
                        <stop offset="0%" stop-color="#C084FC" />
                        <stop offset="22.35%" stop-color="#A855F7" stop-opacity=".64" />
                        <stop offset="100%" stop-color="#0F172A" stop-opacity="0" />
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
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
            <div class="">
                <div
                    class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
                    <!-- Content -->
                    <div class="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center flex flex-col justify-center"
                        data-aos="fade-down">
                        <h3
                            class="h3 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                            IPA
                        </h3>
                        <p class="text-lg text-slate-400 mb-8 ">Crafted with passion and precision, nuestra IPA is a
                            bold, hop-forward brew that commands atención. This is a brew that delivers el perfect punch
                            de bitterness y un crisp, refreshing finish. Es más que an IPA -it’s the spirit of a Mexican
                            craft, brewed for those who crave intensity y originalidad in every sip.
                             
                            Un tributo to Vizcaino, a bio-natural park en Baja California Sur, Mexico, declarado a World
                            Heritage site by UNESCO in 1993.
                            </p>
                        <div class="mt-8 w-72 md:max-w-xs max-md:mx-auto space-y-2  ">
                            <button
                                class="flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100"
                                :class="tab !== '1' ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'"
                                @click.prevent="tab = '1'">
                                <span>Color: Deep Gold</span>
                            </button>
                            <button
                                class="flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100"
                                :class="tab !== '2' ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'"
                                @click.prevent="tab = '2'">
                                <span>SRM: 6</span>
                            </button>
                            <button
                                class="flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100"
                                :class="tab !== '3' ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'"
                                @click.prevent="tab = '3'">
                                <span>IBU: 11</span>
                            </button>
                            <button
                                class="flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100"
                                :class="tab !== '4' ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'"
                                @click.prevent="tab = '4'">
                                <span>Caloriaas: 5.4%</span>
                            </button>
                            <button
                                class="flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100"
                                :class="tab !== '4' ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'"
                                @click.prevent="tab = '4'">
                                <span>Alc: 5.4%</span>
                            </button>
                        </div>
                    </div>

                    <!-- Image -->
                    <div class="md:w-5/12 lg:w-1/2 flex justify-center items-center " data-aos="fade-up"
                        data-aos-delay="100">
                        <div class="relative h-full left-1 md:left-0">
                            <img src="/images/beers/ipa/chela.png" class="h-[75vh] max-h-[700px] object-contain" />
                        </div>
                    </div>

                </div>
            </div>
            <!-- New Section for Text and Image -->
            <div class="flex flex-col md:flex-row justify-center items-center
                 space-x-0 md:space-x-8 pb-12 md:pb-20">
                <div class="w-full md:w-2/3  text-center md:text-left mr-4 py-6">
                    <p class="text-lg text-slate-400">
                        Crafted with passion and precision, nuestra IPA is a bold, hop-forward brew that commands
                        atención. This is a brew that delivers el perfect punch de bitterness y un crisp, refreshing
                        finish. Es más que an IPA -it’s the spirit of a Mexican craft, brewed for those who crave
                        intensity y originalidad in every sip.
                         
                        Un tributo to Vizcaino, a bio-natural park en Baja California Sur, Mexico, declarado a World
                        Heritage site by UNESCO in 1993.

                    </p>
                </div>
                <div class="flex justify-center items-start w-full md:w-1/3 mt-4 md:mt-0">
                    <!-- Cambié w-1/3 a w-full para pantallas pequeñas -->
                    <img src="/images/beers/ipa/image.png" alt="Beer" class="h-56 object-contain" />
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