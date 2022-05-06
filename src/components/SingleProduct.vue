<template>
    <div class="item">
        <div class="is-flex">
            <div class="div">
                <p class="has-text-weight-bold"> {{item.name}} </p>
                <p class="is-size-7">{{ item.sku }}</p>
                <p class="is-size-7 is-capitalized">Quantity: {{ item.quantity}}</p>
            </div>
            <p><strong>${{item.price * item.quantity}}</strong> MXN</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SingleOrder',
        props: ['item'],
    }
</script>

<style scoped>
.item{
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 12px 24px;
    transition: 300ms;
    animation: appearList 500ms ease-in;
}
.is-flex{
    align-items: center;
    justify-content: space-between;
}
</style>