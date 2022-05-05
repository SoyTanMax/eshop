<template>
  <div class="home" v-if="orders">
    <div class="orders" v-for="(order, index) in orders" :key="index">
      <div class="order">
        <p>Orden #{{order.number}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getData, orders } from "@/composables/getData"
export default {
  name: "Home",
  setup(){
    getData();
    return { orders }
  }
};
</script>
<style scoped>
.order{
  border-radius: 10px;
  padding: 10px;
  background: rgb(201, 201, 201);
  margin-bottom: 24px;
}
</style>
