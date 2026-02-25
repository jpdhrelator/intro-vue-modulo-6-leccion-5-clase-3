<template>
    <div>
        <h3>{{ route.query.pagina }}</h3>
        <table>
             <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
                </tr>
            </tbody>            
        </table>
        <button @click="retroceder">retroceder</button> |
            <button @click="avanzar">avanzar</button>
            <br>
            <button @click="salir">Salir</button> |
            <button @click="salir2">Salir2</button> |
            <button @click="salirConVolver">Salir Con Volver</button> |
            <button @click="salirSinVolver">Salir Sin Volver</button>

            <hr/>

            <router-link :to="{ 
                query:{ 
                    pagina:'1', 
                }
                    }">Avanzar</router-link> <br/>
            <router-link :to="{ 
                path:'mensajero',
                query:{ 
                    nombre:'Rosa', 
                    apellido:'Rojas'
                }
                    }">Ir a Mensajero</router-link> <br/>
            <router-link :to="{
                name:'messenger', 
                query: { 
                    nombre:'Rosa', 
                apellido:'Rojas'}, 
                params:{
                    id:'2'
                    }
                    }">Ir a Mensajero 2</router-link>

    </div>
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router';
const route= useRoute();
const router=useRouter();
const pagina= route.query.pagina;
console.log(route.name);




function avanzar(){
    const pag= (route.query.pagina ?? 0)*1;
    router.push({ 
        query:
        { 
         pagina: pag + 1,
         order: 'asc'   

        }
    });
}
function retroceder(){
    const pag= (route.query.pagina ?? 0)*1;
    router.push({ 
        query:
        { 
         pagina: pag - 1,
         order: 'asc'   

        }
    });
}
async function salir(){
  await router.push({
        path:'mensajero',
        query:{ nombre:'Rosa', apellido:'Rojas'}
    });
    console.log('Nos Fuimos');
    
}
function salir2(){
   router.push({
        name:'messenger',
        query:{ nombre:'Rosa', apellido:'Rojas'},
        params:{id:"1"},
        replace:true
    })
}

function salirConVolver(){
    router.push("/mensajero")
}
function salirSinVolver(){
    router.replace("/mensajero")
}
</script>

<style  scoped>

</style>