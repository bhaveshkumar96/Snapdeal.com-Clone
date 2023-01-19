import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"

const initialState ={
    products:[],
    isLoading:false,
    isError:false
}
export const reducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case GET_PRODUCT_REQUEST:
            return{...state, isLoading:true}
        case GET_PRODUCT_SUCCESS:
            return{...state, isLoading:false, products:payload}
        case GET_PRODUCT_FAILURE:
            return{...state, isLoading:false, isError:true}      
        default:
            return state      
    }


}