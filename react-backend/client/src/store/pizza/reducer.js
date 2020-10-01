import { SET_PIZZA } from './actions';

const initialState = {
  pizza: [],
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZA:
      return { ...state, pizza: action.pizzas };
    default:
      return state;
  }
};

export default pizzaReducer;
