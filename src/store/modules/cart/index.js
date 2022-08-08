import cartMutations from "./mutations";
import cartActions from "./actions";
import cartGetters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};
