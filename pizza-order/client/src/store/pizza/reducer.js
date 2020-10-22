import { CHANGE, SET_PIZZA, SET_PIZZA_PROFILE } from "./actions";

const initialState = {
  pizza: [],
  pizzaProfile: {
    composition: [],
    img: null,
    price: null,
    likes: null,
    name: null,
    product: null,
    variableProduct:  [{}, {}, {}],
  },
  onChange: false
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZA: {
      
      return { ...state, pizza: action.pizzas };
    }

    case SET_PIZZA_PROFILE: {
     
      return { ...state, pizzaProfile: action.pizzaProfile };
    }
    case CHANGE: {
     debugger
        let pizza = state.pizza.find(item => item._id == action.id);
        let id = state.pizza.findIndex(item => item._id == action.id);
        pizza = {...state.pizza[id],  price: action.change}
        let allPizza = {...state.pizza, pizza}
        const a = 5;
      return { ...state, pizza: pizza };
    }
    default:
      return state;
  }
};

export default pizzaReducer;
