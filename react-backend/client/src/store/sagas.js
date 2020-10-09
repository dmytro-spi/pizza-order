import { takeEvery, put, call, all } from "redux-saga/effects";
import { authAPI, productAPI } from "../api/api";
import { LOAD_AUTH } from "./auth/actions";
import { LOAD_DRINK, setDrink } from "./drinks/actions";
import {
  GET_PIZZA_BY_ID,
  LOAD_PIZZA,
  setPizza,
  setPizzaProfile,
} from "./pizza/actions";

//Загрузка массива пицц
function* workerLoadPizza() {
  const data = yield call(productAPI.getPizzaProduct);
  yield put(setPizza(data));
}

export function* watchLoadPizza() {
  yield takeEvery(LOAD_PIZZA, workerLoadPizza);
}


//загрузка профиля пиццы
function* workerLoadPizzaProfile(id) {
  const pizza = yield call(productAPI.getPizzaProduct);
  let pizzaProfile;
  pizza.forEach(element => {
    if (element.id == id.id) {
      pizzaProfile = element;
    }
  });
  yield put(setPizzaProfile(pizzaProfile));
}
export function* watchLoadPizzaProfile() {
  yield takeEvery(GET_PIZZA_BY_ID, workerLoadPizzaProfile);
}


//загрузка всех напитков
function* workerLoadDrink() {
  const data = yield call(productAPI.getDrinkProduct);
  yield put(setDrink(data));
}

export function* watchLoadDrink() {
  
  yield takeEvery(LOAD_DRINK, workerLoadDrink);
}


//Регистрация
function* workerRegistration(loginData) {
  yield call(authAPI.login(loginData));
  
}

export function* watchRegistration() {
  yield takeEvery(LOAD_AUTH, workerRegistration);
  
}

export default function* rootSaga() {
  yield all([watchLoadDrink(), 
    watchLoadPizzaProfile(), 
    watchLoadPizza(),
    watchRegistration(),
  ]);
}
