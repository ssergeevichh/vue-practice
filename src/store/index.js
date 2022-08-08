import { createStore } from "vuex";
import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";
import productsData from "./modules/products";
import cartData from "./modules/cart/index";

const store = createStore({
  modules: {
    prods: productsData,
    cart: cartData,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
