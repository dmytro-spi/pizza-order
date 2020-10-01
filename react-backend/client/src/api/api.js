export const productAPI = {
  getPizzaProduct() {
    return fetch('/pizzas').then((res) => res.json());
  },

  getDrinkProduct() {
    return fetch('/drinks').then((res) => res.json());
  },
};
