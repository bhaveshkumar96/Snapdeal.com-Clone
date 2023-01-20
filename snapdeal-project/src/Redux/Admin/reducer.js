import {
  ADD_ADMIN_DATA_FAILURE,
  ADD_ADMIN_DATA_REQUEST,
  ADD_ADMIN_DATA_SUCCESS,
  GET_ADMIN_DATA_FAILURE,
  GET_ADMIN_DATA_REQUEST,
  GET_ADMIN_DATA_SUCCESS,
} from "./actionTypes";

const initialState = {
  adminData: [],
  isError: false,
  isLoading: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ADMIN_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_ADMIN_DATA_SUCCESS:
      return { ...state, isLoading: false, adminData: payload };
    case GET_ADMIN_DATA_FAILURE:
      return { ...state, isError: true };
    case ADD_ADMIN_DATA_REQUEST:
      return { ...state, isLoading: true };
    case ADD_ADMIN_DATA_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_ADMIN_DATA_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
