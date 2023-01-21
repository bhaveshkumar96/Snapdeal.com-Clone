import axios from "axios";
import {
  ADD_ADMIN_DATA_FAILURE,
  ADD_ADMIN_DATA_REQUEST,
  ADD_ADMIN_DATA_SUCCESS,
  GET_ADMIN_DATA_FAILURE,
  GET_ADMIN_DATA_REQUEST,
  GET_ADMIN_DATA_SUCCESS,
} from "./actionTypes";

export const getAdminDataRequest = () => {
  return { type: GET_ADMIN_DATA_REQUEST };
};

export const getAdminDataSuccess = (payload) => {
  return { type: GET_ADMIN_DATA_SUCCESS, payload };
};

export const getAdminDataFailure = () => {
  return { type: GET_ADMIN_DATA_FAILURE };
};
export const addAdminDataRequest = () => {
  return { type: ADD_ADMIN_DATA_REQUEST };
};

export const addAdminDataSuccess = () => {
  return { type: ADD_ADMIN_DATA_SUCCESS };
};

export const addAdminDataFailure = () => {
  return { type: ADD_ADMIN_DATA_FAILURE };
};

export const getAdminData = (dispatch) => {
  dispatch(getAdminDataRequest());
  axios
    .get(`https://snapdeal-productapi.onrender.com/beauty`)
    .then((res) => {
      dispatch(getAdminDataSuccess(res.data));
      //console.log(res.data)
    })
    .catch((err) => dispatch(getAdminDataFailure()));
};

// export const addAdminData =(newData)=>(dispatch)=>{
//     dispatch(getAdminDataRequest())
//    return axios.post(`https://snapdeal-productapi.onrender.com/beauty`, newData)
//     .then((res)=> {
//         dispatch(getAdminDataSuccess(res.data))
//         console.log(res.data)
//     })
//     .catch((err)=> dispatch(getAdminDataFailure()))
// }
export const addAdminData = (newData) => (dispatch) => {
   
     
      dispatch(addAdminDataRequest());
      return axios
        .post(
          `https://snapdeal-productapi.onrender.com/beauty`,
          newData
        )
        .then(() => {
          dispatch(addAdminDataSuccess());
        })
        .catch(() => {
          dispatch(addAdminDataFailure());
        });
    
  };

  export const updateAdminData = ()=>{

  }

  export const deleteAdminData = ()=>{
    axios.delete(`https://snapdeal-productapi.onrender.com/beauty`)
  }