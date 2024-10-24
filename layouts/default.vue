<template>
    <Html lang="en" />
    <Head>
        <Link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <Link rel="preload" fetchpriority="high" as="image" type="image/webp" href="/images/LOGO LETRAS-.png" />
    </Head>

    <div class="relative max-w-[1920px] mx-auto">
        <!-- Popup de verificación de edad -->
        <AgeVerificationPopup v-if="shouldShowVerification" />

        <!-- Si la verificación de edad ha sido completada -->
        <Nav v-if="!shouldShowVerification" />
        <NuxtPage v-if="!shouldShowVerification" />
        <Foot v-if="!shouldShowVerification" />
    </div>
</template>


<script>
export default {
    data() {
        return {
            shouldShowVerification: true,
            showLoader: true,
        };
    },
    watch: {
        // Watch for route changes
        '$route'(to) {
            this.handleRouteChange(to.path);
        }
    },
    mounted() {
        this.handleRouteChange(this.$route.path);
        
        window.addEventListener('load', () => {
            this.showLoader = false;
        });
    },
    methods: {
        handleRouteChange(path) {
            // List of routes that don't require age verification
            const publicRoutes = ['/privacy-policy', '/terms-conditions'];
            
            if (publicRoutes.includes(path)) {
                this.shouldShowVerification = false;
                return;
            }

            // Check for age verification
            const expirationTime = localStorage.getItem('es_mayor_de_edad');
            
            if (expirationTime && Date.now() <= Number(expirationTime)) {
                this.shouldShowVerification = false;
            } else {
                // If not verified and not on a public route, show verification
                this.shouldShowVerification = true;
                
                // Remove the age verification if it's expired
                if (expirationTime) {
                    localStorage.removeItem('es_mayor_de_edad');
                }
            }
        },
        handleAge() {
            this.shouldShowVerification = false;
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