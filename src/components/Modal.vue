<template>
    <div class="modal" :class="{'is-active': payed}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <div class="icon-container block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <p class="block has-text-weight-bold is-size-3">Pago Exitoso!</p>
                <router-link :to="{name: 'Home'}">
                    <button class="button is-medium">Regresar a las Órdenes</button>
                </router-link>
            </div>
        </div>
        <button @click="closeModal" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<script>
    export default {
        props: ['payed'],
        setup(props, context){
            const closeModal = () => {
                context.emit('closeModal')
            }
            return {closeModal}
        }
    }
</script>

<style scoped>
.box{
    width: 70%;
    min-height: 350px;
}
.modal-content, .box, .icon-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.icon-container{
    width: 100px;
    height: 100px;
    background: #C0F5E2;
    border-radius: 50%;
}
svg{
    max-width: 50px;
    color: #0C7E80;
}
p{
    color: #14B296;
}
.modal-content .button{
    background: #FFFFFF;
    border: 2px solid #179294;
    border-radius: 12px;
    color: #179294;
    transition: 300ms
}
.modal-content .button:hover{
    transform: scale(1.02);
}
</style>