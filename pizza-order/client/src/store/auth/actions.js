//Для регистрации
export const LOAD_AUTH = "LOAD_AUTH";
export const SET_MESSAGE = "LOAD_MESSAGE";

//Для логинизации
export const SET_TOKEN = "SET_TOKEN";
export const LOAD_LOGIN = "LOAD_LOGIN";

//Для проверки логинизации
export const LOAD_ME = "LOAD_ME";
export const SET_LOAD_ME_DATA = 'SET_LOAD_ME_DATA'

//Для разлогирования
export const REMOVE_TOKEN = 'REMOVE_TOKEN'

//action Для watcher
export const loadAuth = (loginData) => ({ type: LOAD_AUTH, loginData });
export const loadLogin = (loginData) => ({ type: LOAD_LOGIN, loginData });
export const loadMe = (token) => ({ type: LOAD_ME, token });

//action
export const setMessage = (message, isRegistrate) => ({
  type: SET_MESSAGE,
  message,
  isRegistrate
});

export const setToken = (data) => ({
  type: SET_TOKEN,
  data
});
export const removeToken = () => ({
  type: REMOVE_TOKEN
});

export const setLoadMeData = (data) => ({
  type: SET_LOAD_ME_DATA,
  data
});