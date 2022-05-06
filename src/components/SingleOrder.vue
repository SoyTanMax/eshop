<template>
    <div class="order">
        <router-link :to="{name: 'OrderDetails', params: {id: order.id}}">
            <div class="top-info is-flex">
                <p class="has-text-weight-bold">Orden #{{order.number}}</p>
                <p><strong>${{order.totals.total}}</strong> {{ order.currency }}</p>
            </div>
            <div class="bottom-info is-flex">
                <p class="is-size-7">{{ Date(order.dates.updatedAt).slice(4,16) }}</p>
                <p class="is-capitalized">{{order.payment.status}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'SingleOrder',
        props: ['order'],
        
    }
</script>

<style scoped>
.order{
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 12px 24px;
    transition: 300ms;
    animation: appearList 500ms ease-in;
}
.order a{
    color: #4A4B50;
}
.order:hover{
    transform: scale(1.02);
}
.top-info, .bottom-info{
    justify-content: space-between;
    align-items: center;
}
</style>