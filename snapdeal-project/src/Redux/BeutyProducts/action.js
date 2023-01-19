import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"

export const getProductsRequestAction = () =>{
    return {type:GET_PRODUCT_REQUEST}
}

export const getProductsSuccessAction = (payload) =>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}

export const getProductsFailureAction = () =>{
    return {type:GET_PRODUCT_FAILURE}
}

