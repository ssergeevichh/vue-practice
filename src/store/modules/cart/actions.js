export default {
  addToCart(context, payload) {
    const prodId = payload.id;
    const products = context.rootGetters["prods/products"];
    const product = products.find((product) => product.id === prodId);

    context.commit("addProductToCart", product);
  },
  removeFromCart(context, payload) {
    context.commit("removeProductFromCart", payload);
  },
};
