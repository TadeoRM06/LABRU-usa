<template>
  <section class="w-full">
    <div id="about" class="w-full mx-auto flex flex-col items-center  bg-cover bg-center py-8 px-4 sm:px-6 lg:px-8">
      <h2 class="h2 font-bold text-white text-center mb-4 mt-12" data-aos="fade-up">ABOUT US</h2>
      <p class="text-white text-center text-sm sm:text-base lg:text-lg max-w-2xl" data-aos="fade-up" data-aos-delay="200">
        Redescubre la nostalgia de México con LA BRU en cada chela, straight from Michoacán.
      </p>

      <!-- Imagen centrada -->
      <div class="flex justify-center">
        <img src="/images/image.png" alt="Descripción de la imagen" 
             class="w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/3 xl:w-2/6 h-auto my-8 sm:my-12" 
             data-aos="zoom-in" data-aos-delay="400"/>
      </div>

      <!-- Contenedor para los 3 divs -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mb-5" data-aos="fade-up" data-aos-delay="300">
        <!-- Card #1 -->
        <div class="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
          <div class="flex items-center space-x-4 p-4 h-full">
            <svg class="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path class="fill-primary" fill-opacity=".24" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z" />
              <path class="fill-primary-light" fill-rule="nonzero" d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z" />
            </svg>
            <p class="text-sm text-slate-400">
              <span class="font-semibold">Celebración de México:</span> More than just una chela, we honor las tradiciones y el legado de su gente.
            </p>
          </div>
        </div>
        <!-- Card #2 -->
        <div class="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
          <div class="flex items-center space-x-4 p-4 h-full">
            <svg class="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path class="fill-primary" fill-opacity=".24" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z" />
              <path class="fill-primary-light" fill-rule="nonzero" d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z" />
            </svg>
            <p class="text-sm text-slate-400">
              <span class="font-semibold">Cerveza Artesanal Mexicana:</span> Proudly hecha en Morelia, Michoacán, capturamos la esencia de la craftsmanship.
            </p>
          </div>
        </div>
        <!-- Card #3 -->
        <div class="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
          <div class="flex items-center space-x-4 p-4 h-full">
            <svg class="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path class="fill-primary" fill-opacity=".24" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z" />
              <path class="fill-primary-light" fill-rule="nonzero" d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z" />
            </svg>
            <p class="text-sm text-slate-400">
              <span class="font-semibold">Descubre la magia:</span> Every botella es una invitación para explorar la rich cultura de México.
                        </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (width: 768px) {
  .items-features {
    grid-template-columns: repeat(2, 1fr);
  }
  .items-features > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 66.666667%; /* equivalente a md:max-w-md */
  }
}
</style>
