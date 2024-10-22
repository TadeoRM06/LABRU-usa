<script>
export default {
    data() {
        return {
            showAgeErrorMessage: false,
        };
    },
    methods: {
        confirmUnderAge() {
            window.location.href = 'https://www.google.com';
        },
        confirmOverAge() {
            document.body.style.overflowY = 'auto';
            document.body.style.overflowX = 'hidden';
            const expirationTime = Date.now() + (3 * 60 * 60 * 1000);
            localStorage.setItem('es_mayor_de_edad', expirationTime);
            window.location.reload();
        },
    },
};
</script>

<template>
    <div class="flex flex-col w-full h-svh ">
        <!-- Formulario e imagen -->
        <div class="flex w-full h-full">
            <!-- Parte Izquierda -->
            <div class="flex flex-col items-center gap-6 justify-center md:w-1/2 w-full text-white text-center text-xl p-8">
                <img src="/images/LOGO LETRAS-.png" class="w-36 mb-10 md:mb-2" alt="Logo" />
                <p class="mb-10 md:mb-2">It is important to make sure that you are of legal age, please confirm
                </p>
                <div class="w-full flex  items-center justify-center gap-6">
                    <button @click.pre="confirmUnderAge"
                        class="w-1/3 bg-[#1E1E1E] p-2 hover:brightness-125 transition duration-300 ease-in-out"
                        type="submit">No</button>
                    <button @click="confirmOverAge"
                        class="w-1/3 bg-[#cc7b34] p-2 hover:brightness-125 transition duration-300 ease-in-out"
                        type="submit">Sí</button>
                </div>
            </div>

            <!-- Parte Derecha -->
            <div class="md:flex items-center justify-center md:w-1/2 hidden text-white">
                <img src="/images/descubre.webp" class="h-[30rem]" alt="Descubre la magia" />
            </div>
        </div>

        <!-- Políticas y privacidad -->
        <div class="w-full flex items-center justify-center gap-4 text-center text-white p-4" id="privacy_conditions">
            <a data-te-sidenav-link-ref href="/privacidad_y_politica">Privacidad y Política</a>
            |
            <a data-te-sidenav-link-ref href="/terminos_y_condiciones">Términos y Condiciones</a>
        </div>
    </div>
</template>
  
<style scoped>
p,
form,
button,
#privacy_conditions {
    font-family: "DIN";
}</style>
  