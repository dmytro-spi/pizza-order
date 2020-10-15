import { REMOVE_TOKEN, SET_LOAD_ME_DATA, SET_MESSAGE, SET_TOKEN } from "./actions";

const initialState = {
  
    userId: null,
    login: null,
    password: null,
    message: null,
    cart: [],
    isRegistrate: false,
  
};

export const localStorageName = "userData";

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message,
        isRegistrate: action.isRegistrate,
      };

    case SET_TOKEN:
      const {userId = null, token = null} = action.data
      
      if (token) {
        document.cookie = JSON.stringify({userId, token});
        localStorage.setItem(localStorageName, JSON.stringify({userId, token}));
        return { ...state, ...action.data, isRegistrate: true };
      }
      return { ...state, ...action.data, isRegistrate: false };
    case SET_LOAD_ME_DATA:
      
      return {
        ...state,
        ...action.data,
        isRegistrate: true
      };

    case REMOVE_TOKEN:
      
      localStorage.removeItem("userData");
      
      return { ...state, userId: null,
        login: null,
        password: null,
        message: null,
        cart: [],
        isRegistrate: false, };
    default:
      return state;
  }
};

export default authReducer;
