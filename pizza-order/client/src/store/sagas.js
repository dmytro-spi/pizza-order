import { takeEvery, put, call, all } from "redux-saga/effects";
import { authAPI, productAPI } from "../api/api";
import { LOAD_AUTH, LOAD_LOGIN, LOAD_LOGOUT, LOAD_ME, setLoadMeData, setMessage, setToken } from "./auth/actions";
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
function* workerRegistration(action) {
  
  const data = yield call(authAPI.registration, action.loginData);
  
  yield put(setMessage(data.message, data.isRegistrate))
  
}

export function* watchRegistration() {
  yield takeEvery(LOAD_AUTH, workerRegistration);
  
}

//Логинизация
function* workerLogin(action) {
  const data = yield call(authAPI.login, action.loginData);
  yield put(setToken(data))
}

export function* watchLogin() {
  yield takeEvery(LOAD_LOGIN, workerLogin);
  
}

// Проверка логинизации
function* workerMe(action) {
  
  const data = yield call(authAPI.me, 
    action.token
    );
    debugger
  yield put(setLoadMeData(data))
}
export function* watchMe() {
  
  yield takeEvery(LOAD_ME, workerMe);
  
}


export default function* rootSaga() {
  yield all([watchLoadDrink(), 
    watchLoadPizzaProfile(), 
    watchLoadPizza(),
    watchRegistration(),
    watchLogin(),
    watchMe()
  ]);
}
