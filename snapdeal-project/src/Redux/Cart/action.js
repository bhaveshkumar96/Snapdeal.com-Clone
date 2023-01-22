import axios from "axios"
import { DELETE_CART_PRODUCTS_FAILURE, DELETE_CART_PRODUCTS_REQUEST, DELETE_CART_PRODUCTS_SUCCESS, GET_CART_PRODUCTS_FAILURE, GET_CART_PRODUCTS_REQUEST, GET_CART_PRODUCTS_SUCCESS, POST_CART_PRODUCTS_FAILURE, POST_CART_PRODUCTS_REQUEST, POST_CART_PRODUCTS_SUCCESS } from "./actionType"


export const  getCartProductsRequest=()=>{
    return {type: GET_CART_PRODUCTS_REQUEST}
}

export const  getCartProductsSuccess=(payload)=>{
    return {type: GET_CART_PRODUCTS_SUCCESS, payload}
}

export const  getCartProductsFailure=()=>{
    return {type: GET_CART_PRODUCTS_FAILURE}
}
export const  postCartProductsRequest=()=>{
    return {type: POST_CART_PRODUCTS_REQUEST}
}
export const  postCartProductsSuccess=(payload)=>{
    return {type: POST_CART_PRODUCTS_SUCCESS, payload}
}

export const  postCartProductsFailure=()=>{
    return {type: POST_CART_PRODUCTS_FAILURE}
}



//


export const deleteCartProductsRequest=()=>{
    return {type:DELETE_CART_PRODUCTS_REQUEST}
}

export const deleteCartProductsSuccess=(payload)=>{
    return {type:DELETE_CART_PRODUCTS_SUCCESS, payload}
}
export const deleteCartProductsFailure=()=>{
    return {type:DELETE_CART_PRODUCTS_FAILURE}
}



export const postData=(newData)=>(dispatch)=>{
    dispatch(postCartProductsRequest())
    axios.post(`https://snapdeal-productapi.onrender.com/posts`, newData)
    .then((res)=>{
        console.log(res.data)
        dispatch(postCartProductsSuccess(res.data))
    }).catch((err)=> dispatch(postCartProductsFailure()))
}



export const getCartItem=()=>(dispatch)=>{
    dispatch(getCartProductsRequest())
    axios.get(`https://snapdeal-productapi.onrender.com/posts`)
    .then((res)=>{
        console.log(res.data)
        dispatch(getCartProductsSuccess(res.data))
    }).catch(()=> dispatch(getCartProductsFailure()))
}

export const deleteCartItem=(id)=>(dispatch)=>{
    dispatch(deleteCartProductsRequest())
   return axios.delete(`https://snapdeal-productapi.onrender.com/posts/${id}`)
    .then((res)=> dispatch(deleteCartProductsSuccess(res.data)))
    .catch(()=> dispatch(deleteCartProductsFailure()))
  }