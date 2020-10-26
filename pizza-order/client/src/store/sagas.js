import { takeEvery, put, call, all } from "redux-saga/effects";
import { authAPI, productAPI } from "../api/api";
import { LOAD_AUTH, LOAD_LOGIN, LOAD_LOGOUT, LOAD_ME, setLoadMeData, setMessage, setToken } from "./auth/actions";
import { GET_DRINK_BY_ID, LOAD_DRINK, setDrink, setDrinkProfile } from "./drinks/actions";
import {
  GET_PIZZA_BY_ID,
  LOAD_PIZZA,
  setPizza,
  setPizzaProfile,
} from "./pizza/actions";

//Loading array of pizza
function* workerLoadPizza() {
  const data = yield call(productAPI.getPizzaProduct);
  
  yield put(setPizza(data));
}

export function* watchLoadPizza() {
  yield takeEvery(LOAD_PIZZA, workerLoadPizza);
}


//Loading profile of pizza
function* workerLoadPizzaProfile(action) {
  
  const pizzaProfile = yield call(productAPI.getPizzaProfile, action.id);
  
  yield put(setPizzaProfile(pizzaProfile));
}
export function* watchLoadPizzaProfile() {
  yield takeEvery(GET_PIZZA_BY_ID, workerLoadPizzaProfile);
}


//Loading array of drinks
function* workerLoadDrink() {
  const data = yield call(productAPI.getDrinkProduct);
  yield put(setDrink(data));
}

export function* watchLoadDrink() {
  
  yield takeEvery(LOAD_DRINK, workerLoadDrink);
}


//Loading profile of drink
function* workerLoadDrinkProfile(action) {
  const drinkProfile = yield call(productAPI.getDrinkProfile, action.id);
  
  yield put(setDrinkProfile(drinkProfile));
}
export function* watchLoadDrinkProfile() {
  yield takeEvery(GET_DRINK_BY_ID, workerLoadDrinkProfile);
}



//Registration
function* workerRegistration(action) {
  
  const data = yield call(authAPI.registration, action.loginData);
  
  yield put(setMessage(data.message, data.isRegistrate))
  
}

export function* watchRegistration() {
  yield takeEvery(LOAD_AUTH, workerRegistration);
  
}

//Login
function* workerLogin(action) {
  
  // const data = 
  yield call(authAPI.login, action.loginData);
  // yield put(setToken(data))
}

export function* watchLogin() {
  yield takeEvery(LOAD_LOGIN, workerLogin);
  
}

//Logout
function* workerLogout(action) {
  debugger
  yield call(authAPI.logout, action.login);
  
}

export function* watchLogout() {
  yield takeEvery(LOAD_LOGOUT, workerLogout);
  
}

//Check me login
function* workerMe() {
  debugger
  const data = yield call(authAPI.me);
    
  yield put(setLoadMeData(data))
}
export function* watchMe() {
  
  yield takeEvery(LOAD_ME, workerMe);
  
}


export default function* rootSaga() {
  yield all([watchLoadDrink(),
    watchLoadDrinkProfile(),
    watchLoadPizzaProfile(), 
    watchLoadPizza(),
    watchRegistration(),
    watchLogin(),
    watchLogout(),
    watchMe()
  ]);
}
