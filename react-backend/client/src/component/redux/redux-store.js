import pizzaReducer from "./pizza-reducer"
import thunkMiddleware from 'redux-thunk';
const { createStore, combineReducers, applyMiddleware } = require("redux");



let reducers = combineReducers({
   
    pizzaPage:pizzaReducer
    
    
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;