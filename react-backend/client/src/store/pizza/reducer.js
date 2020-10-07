import { SET_PIZZA, SET_PIZZA_PROFILE } from "./actions";

const initialState = {
  pizza: [],
  pizzaProfile: {},
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZA: {
      
      return { ...state, pizza: action.pizzas };
    }

    case SET_PIZZA_PROFILE: {
      
      return { ...state, pizzaProfile: action.pizzaProfile };
    }
    default:
      return state;
  }
};

export default pizzaReducer;
