export const SET_DRINK = "SET_DRINK";
export const LOAD_DRINK = "LOAD_DRINK";

export const setDrink = (drink) =>({type: SET_DRINK, drink});
export const loadDrinks = () => ({type: LOAD_DRINK}); 
