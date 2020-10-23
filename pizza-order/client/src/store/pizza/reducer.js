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
      const PizzaWithPrice = state.pizza.map(el => {
        if (el._id == action.id) {
        return el = {...el, price: action.change}
      }
      return el;
    })
        
      return { ...state, pizza: PizzaWithPrice };
    }
    default:
      return state;
  }
};

export default pizzaReducer;
