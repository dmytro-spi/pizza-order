
import {  SET_DRINK } from "./actions";

const initialState = {
  drinks: [],
};

export const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRINK:
      return { ...state, drinks: action.drink };
    default:
      return state;
  }
};



export default drinkReducer;
