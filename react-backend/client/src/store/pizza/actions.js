export const SET_PIZZA = "SET_PIZZA";
export const LOAD_PIZZA = "LOAD_PIZZA";
export const SET_PIZZA_PROFILE = "SET_PIZZA_PROFILE";
export const GET_PIZZA_BY_ID = "GET_PIZZA_BY_ID";


export const setPizza = (pizzas) => ({ type: SET_PIZZA, pizzas });
export const loadPizza = () => ({ type: LOAD_PIZZA});

export const setPizzaProfile = (pizzaProfile) => ({ type: SET_PIZZA_PROFILE, pizzaProfile });
export const loadPizzaProfile = (id) => ({ type: GET_PIZZA_BY_ID, id});
