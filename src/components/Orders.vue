<template>
    <div v-if="$store.state.orders" class="orders section">
        <p class="is-size-3 has-text-weight-bold">Órdenes</p>
        <hr>
        <div v-for="order in $store.state.orders" :key="order.id">
            <SingleOrder :order="order"/>
        </div>
    </div>
</template>

<script>
import SingleOrder from "@/components/SingleOrder.vue"
export default {
    components: {
        SingleOrder
    }
}
</script>

<style scoped>

</style>