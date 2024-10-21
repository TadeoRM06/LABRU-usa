/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'], // Asegúrate de que esto incluya tus archivos
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF8000', // Color principal
          light: '#FF952A',   // Variante más clara
          titles: '#E5E7EB'
        },
        secondary: {
          text:   '#1F2937', //Texto sobre blanco
          parrafo: '#c8c8c8'
        },
        // Puedes agregar más colores aquí si lo deseas
      },
    },
  },
  plugins: [],
}
