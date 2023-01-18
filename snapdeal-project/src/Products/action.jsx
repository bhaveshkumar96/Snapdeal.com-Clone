import axios from "axios"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"

export const  getProductsRequest=()=>{
    return {type: GET_PRODUCTS_REQUEST}
}

export const  getProductsSuccess=(payload)=>{
    return {type: GET_PRODUCTS_SUCCESS, payload}
}

export const  getProductsFailure=()=>{
    return {type: GET_PRODUCTS_FAILURE}
}

export const getData =(param, pass='mens')=>(dispatch)=>{
    dispatch(getProductsRequest())
   return axios.get(`https://snapdeal-productapi.onrender.com/${pass}`, param)
    .then((res)=> {
        dispatch(getProductsSuccess(res.data))
        console.log(res.data)
        
    })
    .catch((err)=> dispatch(getProductsFailure))
}