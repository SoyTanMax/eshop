import { createStore } from "vuex";

export default createStore({
  state: {
    orders: []
  },
  mutations: {
    SET_ORDERS(state, orders){
      state.orders = orders
    },
    ADD_PRODUCT(state, newOrder, id){
      state.orders.map(order => {
        if(order.id === id){
          state.orders = {...state.orders, order}
        } 
      })
    }
  },
  actions: {},
  modules: {},
});
