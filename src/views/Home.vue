<template>
  <div class="home">
    <Navbar />
    <Orders />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Orders from "@/components/Orders.vue"
export default {
  name: "Home",
  components: {
    Navbar,
    Orders
  },
};
</script>
<style scoped>

</style>
