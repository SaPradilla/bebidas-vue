<script setup>
    import { useBebidasStore } from '../stores/bebidas'
    import Receta from '../components/Receta.vue';

    const bebidas = useBebidasStore()
</script>

<template>
    <h1 class="text-6xl font-extrabold">Recetas</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10 ">
        <Receta
        v-for="receta in bebidas.recetas "
        :recetas="receta"
        :key="receta.idDrink"
        />
    </div>
</template>

