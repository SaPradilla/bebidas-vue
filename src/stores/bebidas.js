import {ref,reactive,onMounted } from 'vue'
import {defineStore} from 'pinia'
import ApiServices from '../services/ApiServices'

export const useBebidasStore = defineStore('bebidas',()=>{

    const categorias = ref([])
    const busqueda = reactive({
        nombre:'',
        categoria:''
    })

    const recetas = ref([])

     onMounted(async() =>{
        const {data:{drinks} } = await ApiServices.obtenerCategorias()
        console.log(drinks )
        categorias.value = drinks
    })

    async function obtenerRecetas(){
        const {data:{drinks}} = await ApiServices.buscarRecetas(busqueda)
        recetas.value = drinks
    } 

    return {
        categorias,
        busqueda,
        obtenerRecetas,
        recetas
    }
})