import { reducer as formReducer } from "redux-form";
import pizzaReducer from "./pizza/reducer";
import drinkReducer from "./drinks/reducer";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas";
const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({
  pizzaPage: pizzaReducer,
  drinksPage: drinkReducer,
  form: formReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
