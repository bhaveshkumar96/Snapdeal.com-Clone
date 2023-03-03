import React from 'react'
import { DELETE_PRODUCTS_FAILURE, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, POST_PRODUCTS_FAILURE, POST_PRODUCTS_REQUEST, POST_PRODUCTS_SUCCESS } from './actionType'

const initialState = {
  product: [],
  isError: false,
  cart: [],
  isLoading: false,
  pageFilter: {
    pageNumber: 1,
    limit: 10,
    totalPages: 0,
  }
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true }
    case GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, product: payload }
    case GET_PRODUCTS_FAILURE:
      return { ...state, isError: true }

    case POST_PRODUCTS_REQUEST:
      return { ...state, isLoading: true }
    case POST_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, product: payload }
    case POST_PRODUCTS_FAILURE:
      return { ...state, isError: true }
    case DELETE_PRODUCTS_REQUEST:
      return { ...state, isLoading: true }
    case DELETE_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, product: state.product.filter((el) => el.id !== payload) }
    case DELETE_PRODUCTS_FAILURE:
      return { ...state, isError: true }
    default: return state
  }
}

