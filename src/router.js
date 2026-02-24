import {createRouter,createWebHistory} from "vue-router";
import Index from "./views/Index.vue";
import Mensajero from "./views/Mensajero.vue";
import SaludarIngles from "./views/SaludarIngles.vue";
import Tabla from "./views/Tabla.vue";

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component: Index
        }, 
        {
            path:'/mensajero',
            component: Mensajero
        }, 
        {
            path:'/mensajero/:id',
            component: Mensajero
        },
        {
            path:'/mensajero/gringo',
            component: SaludarIngles
        },
        {
            name:"TablaDAtos",
            path:'/tabla',
            component: Tabla,
            meta:{ requisitoA:"Abc1" }
        }
    ]
});



export default router;