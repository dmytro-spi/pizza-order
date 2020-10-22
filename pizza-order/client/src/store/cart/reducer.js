import { ADD_TO_CART } from "./actions";

const initialState = {
  cart: [{ id: 1, name: "CocaCola", img: "https://img3.zakaz.ua/upload.version_1.0.5dc6fc3e19afe3b7fd26255af0e26d88.350x350.jpeg", price: 20, volume: "0,5" },
  {id: 6, name: "Гавайская", img: "https://holyfood.com.ua/wp-content/uploads/2018/11/pizza-pizza-havaiskaya.jpg", price: 140, composition: ["Ветчина", "ананас консервированный", "сыр моцарелла", "помидорный соус"]}
],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.product] };
    default:
      return state;
  }
};

export default cartReducer;
