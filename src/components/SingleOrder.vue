<template>
    <div class="order">
        <router-link :to="{name: 'OrderDetails', params: {id: order.id}}">
            <div class="top-info is-flex">
                <p class="has-text-weight-bold">Orden #{{order.number}}</p>
                <p><strong>${{order.totals.total}}</strong> {{ order.currency }}</p>
            </div>
            <div class="bottom-info is-flex">
                <p class="is-size-7">{{ Date(order.dates.updatedAt).slice(4,16) }}</p>
                <div class="is-capitalized tag">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {{order.payment.status}}
                </div>
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
.tag{
    background: #DAFFDB;
    color: #15A936;
}
svg{
    width: 16px;
    margin-right: 8px;
}
</style>