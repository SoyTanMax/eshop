<template>
    <div class="form">
        <div class="is-flex back" @click="back">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <p>Cancelar</p>
        </div>
        <p class="is-size-3 has-text-weight-bold">Agregar producto</p>
        <hr>
        <form @submit.prevent>
            <div class="block">
                <label for="" class="label">Nombre del producto</label>
                <input type="text" class="input" v-model="formData.name">
            </div>
            <div class="block">
                <label for="" class="label">SKU del producto</label>
                <input type="text" class="input"  v-model="formData.sku">
            </div>
            <div class="block">
                <label for="" class="label">Precio</label>
                <input type="text" class="input"  v-model="formData.price">
            </div>
            <div class="block">
                <label for="" class="label">Cantidad</label>
                <div class="counter is-flex">
                    <button class="button has-text-weight-bold" @click="()=>{
                        if(formData.quantity > 1){
                            formData.quantity--
                        }
                    }">-</button>
                    <p class="quantity has-text-weight-bold">{{ formData.quantity }}</p>
                    <button class="button has-text-weight-bold" @click="formData.quantity++">+</button>
                </div>
            </div>
            <button class="button add" @click="add">
                Agregar
            </button>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
    setup(props, context){
        const store = useStore();
        const route = useRoute()
        const back = () => {
            context.emit('back')
        }
        const formData = ref({
            name: "",
            sku: "",
            price: "",
            quantity: 1
        })

        const add = () => {
            console.log(formData.value)
            store.state.orders.map(order => {
                if(order.id === route.params.id){
                    order.items.push(formData.value)
                }
            })
            context.emit('back')
        }

        return { back, formData, add }
    }
}
</script>

<style scoped>
svg{
    max-width: 20px;
}
.input{
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    max-width: 520px;
}
.counter{
    align-items: center;
}
.quantity{
    margin: 0 12px;
}
.counter .button{
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: #2681D5;
}
.add{
    background: #2681D4;
    border: none;
    color: white;
    border-radius: 8px;
    width: 100%;
    max-width: 520px;
}
.back{
    color: #9A9999;
}
.back:hover{
    color: rgb(77, 77, 77);
}
</style>