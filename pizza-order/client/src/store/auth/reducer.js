import { LOAD_LOGOUT, SET_LOAD_ME_DATA, SET_MESSAGE, 
  // SET_TOKEN 
} from "./actions";

const initialState = {
  
    userId: null,
    login: null,
    password: null,
    message: null,
    cart: [],
    isRegistrate: false,
  
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message,
        isRegistrate: action.isRegistrate,
      };
    case SET_LOAD_ME_DATA:
      debugger
      return {
        ...state,
        ...action.data,
        isRegistrate: true
      };

    case LOAD_LOGOUT:
      
      localStorage.removeItem("userData");
      
      return { ...state, userId: null,
        login: null,
        password: null,
        message: null,
        cart: [],
        // isRegistrate: false, 
      };
    default:
      return state;
  }
};

export default authReducer;
