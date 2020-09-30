import { productAPI } from "../../api/api";

const SET_PIZZA = "SET_PIZZA";

const initialState = {
  pizza: [],
};

export const setPizza = (pizzas) => ({ type: SET_PIZZA, pizzas });

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZA:
        
      return { ...state, pizza: action.pizzas };

    default:
      return state;
  }
};

export const getPizza = () => {
  return (dispatch) => {
    productAPI.getPizzaProduct()
     
      .then((pizzas) => {
        dispatch(setPizza(pizzas));
      });
  };
};

export default pizzaReducer;
