<template>
    <div class="relative max-w-[1920px] mx-auto">
        <AgeVerificationPopup v-if="!ageVerified" />        <Nav v-if="ageVerified" />
        <slot v-if="ageVerified" />
        <Foot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            ageVerified: false,
            showLoader: true,
        };
    },
    mounted() {
        const currentRoute = this.$route.path;

        // Si la ruta no necesita verificar la edad
        if (currentRoute === '/privacidad_y_politica' || currentRoute === '/terminos_y_condiciones') {
            this.ageVerified = true;
            this.showLoader = false;
            return;
        }

        // Verificación de cookies ya existentes
        const expirationTime = localStorage.getItem('es_mayor_de_edad');

        // Si las cookies son válidas 
        if (expirationTime && Date.now() <= Number(expirationTime)) {
            this.ageVerified = true;
        }

        // Ocultar el loader una vez que la verificación esté completa
        window.addEventListener('load', () => {
            this.showLoader = false;
        });
    },
    methods: {
        handleAge() {
            this.ageVerified = true;
            // Aquí puedes establecer la cookie si lo deseas
            const expirationTime = Date.now() + 31536000000; // 1 año
            localStorage.setItem('es_mayor_de_edad', expirationTime);
        },
    },
};
</script>

<style>
@import url("../assets/css/global.css");

.container {
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
}
</style>
