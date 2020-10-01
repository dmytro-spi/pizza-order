export const SET_PIZZA = 'SET_PIZZA';
export const LOAD_PIZZA = 'LOAD_PIZZA';

export const setPizza = (pizzas) => ({ type: SET_PIZZA, pizzas });
export const loadPizza = () => ({ type: LOAD_PIZZA });
