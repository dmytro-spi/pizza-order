import { SET_LOAD_ME_DATA, SET_MESSAGE, SET_TOKEN } from "./actions";

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
        
        localStorage.setItem(localStorageName, JSON.stringify({userId, token}));
      }
      return { ...state, ...action.data };
    case SET_LOAD_ME_DATA:
      
      return {
        ...state,
        ...action.data,
        isRegistrate: true
      };

    // case REMOVE_TOKEN:
      
    //   if (!token) {
    //     debugger;
    //     localStorage.removeItem("userData");
    //   }
    //   return { ...state, user: action.data };
    default:
      return state;
  }
};

export default authReducer;
