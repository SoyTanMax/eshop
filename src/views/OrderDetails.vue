<template>
    <div class="single-order">
        <Modal :payed="payed" @closeModal="payed = false"/>
        <Navbar />
        <div class="section" v-if="!addProductActive">
            <router-link :to="{name: 'Home'}">
                <div class="is-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    <p>Back</p>
                </div>
            </router-link>
            <div class="is-flex header">
                <p class="is-size-3 has-text-weight-bold">Orden #{{ order.number }}</p>
                <div class="btn-container">
                    <button class="button" @click="addProductActive = !addProductActive">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                        Añadir producto
                    </button>
                    <button class="button" @click="payed = true">
                        <p>Pagar</p> 
                    </button>
                </div>
            </div>
            <hr>
            <div v-for="item in order.items" :key="item.id">
                <SingleProduct :item="item"/>
            </div>     
        </div>
        <div class="add section" v-else>
            <Form @back="back" />
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SingleProduct from '../components/SingleProduct.vue'
import Form from "@/components/Form.vue"
import Modal from "@/components/Modal.vue"
import { ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
    props: ['id'],
    components: {
        Navbar,
        SingleProduct,
        Form,
        Modal
    },
    setup(){
        const addProductActive = ref(false)
        const route = useRoute()
        const order = ref([])
        const store = useStore();
        const payed = ref(false)

        store.state.orders.map( prevOrder =>{
            return prevOrder.id === route.params.id ? order.value = prevOrder : null
        })
        const back = () => {
            addProductActive.value = !addProductActive.value
        }
        return { order, addProductActive, back, payed }
    }
}
</script>

<style scoped>
svg{
    max-width: 20px;
}
.header{
    justify-content: space-between;
    align-items: center;
}
.button:first-child{
    background: transparent;
    border: 1px solid #2681D4;
    border-radius: 8px;
    color: #2681D4;
}
.button:last-child{
    background: #2681D4;
    border: none;
    color: white;
    border-radius: 8px;
    margin-left: 12px;
}
a{
    color: #9A9999;
}
a:hover{
    color: rgb(77, 77, 77);
}
/* mobile */
@media screen and (max-width: 500px){
    .header{
        align-items: flex-start;
        flex-direction: column;
    }
}
</style>