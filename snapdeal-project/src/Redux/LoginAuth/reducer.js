import * as types from "./actionTypes";
import { getLocalData, saveLocalData } from "../../Utils/localStorage";
const initialState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      saveLocalData("token", payload.token);
      return { ...state, isLoading: false, isAuth: true, token: payload.token };
    case types.LOGIN_FAILURE:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};

export { reducer };
