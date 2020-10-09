export const SET_USER_DATA = "SET_USER_DATA";
export const LOAD_AUTH = "LOAD_AUTH";

export const setUser = (userID, email, login) => ({
  type: SET_USER_DATA,
  data: { userID, email, login },
});
export const loadAuth = (loginData) => ({ type: LOAD_AUTH, loginData });
