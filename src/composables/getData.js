import { ref } from "vue";

const orders = ref([]);

const getData = async () => {
    try {
        const token = process.env.VUE_APP_KEY;
        const data = await fetch("https://eshop-deve.herokuapp.com/api/v2/orders",{
          method: "get",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        }).then(res => res.json());
        
        orders.value = data.orders;
        console.log(orders.value)

    } catch (error) {
        console.log(error);
    }
}

export { getData, orders }