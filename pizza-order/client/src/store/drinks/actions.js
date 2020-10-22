export const SET_DRINK = 'SET_DRINK';
export const LOAD_DRINK = 'LOAD_DRINK';
export const GET_DRINK_BY_ID = 'GET_DRINK_BY_ID';
export const SET_DRINK_PROFILE = 'SET_DRINK_PROFILE';

export const setDrink = (drink) => ({ type: SET_DRINK, drink });
export const loadDrinks = () => ({ type: LOAD_DRINK });

export const setDrinkProfile = (drinkProfile) => ({ type: SET_DRINK_PROFILE, drinkProfile });
export const loadDrinkProfile = (id) => ({ type: GET_DRINK_BY_ID, id });
