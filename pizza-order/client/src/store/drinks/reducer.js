import { SET_DRINK, SET_DRINK_PROFILE } from './actions';

const initialState = {
  drinks: [],
  drinkProfile: {
    composition: [],
    img: null,
    likes: null,
    name: false,
    price: null,
    volume: null,
    product: null,
    variableProduct:  [],
  }
};

export const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRINK:
      return { ...state, drinks: action.drink };
    case SET_DRINK_PROFILE: {
      debugger
      return { ...state, drinkProfile: action.drinkProfile };
    }
    default:
      return state;
  }
};

export default drinkReducer;
