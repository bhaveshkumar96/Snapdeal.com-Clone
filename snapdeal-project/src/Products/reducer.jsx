import React from 'react'
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from './actionType'

const initialState={
    product:[],
    isError:false,
    isLoading:false
}
const reducer = (state=initialState, {type, payload}) => {
  switch(type){
    case GET_PRODUCTS_REQUEST:
        return {...state, isLoading:true}
    case GET_PRODUCTS_SUCCESS:
        return {...state, isLoading:false, product:payload}
    case GET_PRODUCTS_FAILURE:
        return {...state, isError:true}        
    default: return state
  }
}

export default reducer
