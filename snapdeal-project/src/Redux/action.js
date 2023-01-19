import * as types from "./actionTypes";
import axios from "axios";


const login = (payload) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    return axios.post(`https://reqres.in/api/login`, payload)
        .then((res) => {
            dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token })
        }).catch((err) => {
            dispatch({ type: types.LOGIN_FAILURE })
        })

}
export default login;