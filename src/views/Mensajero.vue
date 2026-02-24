<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route= useRoute();

console.log('params',route.params);
console.log('query',route.query);


const nombre= ref('');

nombre.value=`${route.query.nombre} ${route.query.apellido}`;
</script>

<template>
    <div>
          <h1>Hola {{ nombre }} </h1>  
    </div>
</template>



<style  scoped>

</style>