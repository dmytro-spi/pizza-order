export const productAPI = {
  getPizzaProduct() {
    return fetch("/pizzas").then((res) => res.json())
      
  },

  getDrinkProduct() {},
};
