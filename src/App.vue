<template>
  <router-view />
</template>

<script>
import { getData, orders } from "@/composables/getData"
import { useStore } from 'vuex'
export default{
  setup() {
        const store = useStore();
        getData();
        store.commit('SET_ORDERS', orders)
        return {  }
  }
}
</script>
