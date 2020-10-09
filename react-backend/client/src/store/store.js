import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import pizzaReducer from './pizza/reducer';
import drinkReducer from './drinks/reducer';
import rootSaga from './sagas';
import authReducer from './auth/reducer';

// eslint-disable-next-line no-undef
const { createStore, combineReducers, applyMiddleware } = require('redux');

const reducers = combineReducers({
  pizzaPage: pizzaReducer,
  drinksPage: drinkReducer,
  authPage: authReducer,
  form: formReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
