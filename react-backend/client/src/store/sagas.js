import { takeEvery, put, call, all } from "redux-saga/effects";
import { productAPI } from "../api/api";
import { LOAD_DRINK, setDrink } from "./drinks/actions";
import { LOAD_PIZZA, setPizza } from "./pizza/actions";

function* workerLoadPizza() {
  const data = yield call(productAPI.getPizzaProduct);
  yield put(setPizza(data));
}

export function* watchLoadPizza() {
  yield takeEvery(LOAD_PIZZA, workerLoadPizza);
}



function* workerLoadDrink() {
  const data = yield call(productAPI.getDrinkProduct);
  yield put(setDrink(data));
}

export function* watchLoadDrink() {
  yield takeEvery(LOAD_DRINK, workerLoadDrink);
}

export default function* rootSaga() {
  yield all([
    watchLoadDrink(),
    watchLoadPizza()
  ])
}
