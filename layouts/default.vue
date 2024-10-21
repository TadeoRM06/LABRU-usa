<template>
    <div class="relative max-w-[1920px] mx-auto">
        <Nav/>
        <slot />
        <Foot/>
    </div>

</template>
<style>
@import url("../assets/css/global.css");

.container {
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
}
</style>