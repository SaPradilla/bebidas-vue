<script setup>
    defineProps({
        recetas:{
            type:Object
        }
    })
</script>
<template>
    <div>
        <h2> {{recetas.strDrink }}</h2>
    </div>
</template>