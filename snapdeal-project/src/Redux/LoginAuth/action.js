import * as types from "./actionTypes";
import axios from "axios";

const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://uboric-2bqj.onrender.com/user/login", params)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
      console.log(r.data);
      return types.LOGIN_SUCCESS;
    })
    
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
      return types.LOGIN_FAILURE;
    });
};
export default login;
