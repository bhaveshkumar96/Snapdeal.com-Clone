import React from 'react'
import { DELETE_CART_PRODUCTS_FAILURE, DELETE_CART_PRODUCTS_REQUEST, DELETE_CART_PRODUCTS_SUCCESS, GET_CART_PRODUCTS_FAILURE, GET_CART_PRODUCTS_REQUEST, GET_CART_PRODUCTS_SUCCESS, POST_CART_PRODUCTS_FAILURE, POST_CART_PRODUCTS_REQUEST, POST_CART_PRODUCTS_SUCCESS } from './actionType'

const initialState={
    cart:[],
    isError:false,    
    isLoading:false,  
} 

export const reducer = (state=initialState, {type, payload}) => {
  switch(type){
    case GET_CART_PRODUCTS_REQUEST:
        return {...state, isLoading:true}
    case GET_CART_PRODUCTS_SUCCESS:
        return {...state, isLoading:false, cart:payload }
    case GET_CART_PRODUCTS_FAILURE:
        return {...state, isError:true}        
        
    case POST_CART_PRODUCTS_REQUEST:
      return {...state, isLoading:true}
    case POST_CART_PRODUCTS_SUCCESS:
      return {...state, isLoading:false ,cart:payload}
    case POST_CART_PRODUCTS_FAILURE:
      return {...state, isError:true}  
      case DELETE_CART_PRODUCTS_REQUEST:
        return {...state, isLoading:true }
      case DELETE_CART_PRODUCTS_SUCCESS:
        return {...state, isLoading:false, cart:state.cart.filter((el)=>el.id!==payload )}  
      case DELETE_CART_PRODUCTS_FAILURE:
        return {...state, isError:true}        
    default: return state
  }
}

