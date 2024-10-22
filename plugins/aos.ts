import { defineNuxtPlugin } from '#app';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.AOS = AOS.init({
      // Configuración de AOS
      once: true, // Ejecuta la animación solo una vez
      offset: 100, // Espacio antes de que comience la animación
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      duration: 600, // Duración de la animación
      easing: 'ease-in-out', // Efecto de suavizado de animación
      anchorPlacement: 'top-bottom', // Colocación de anclaje para la animación
      mirror: false, // No volver a animar cuando el elemento vuelva a estar en vista

    });

  }
});
