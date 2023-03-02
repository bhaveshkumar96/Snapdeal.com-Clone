import axios from "axios"
import { DELETE_PRODUCTS_FAILURE, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, POST_PRODUCTS_FAILURE, POST_PRODUCTS_REQUEST, POST_PRODUCTS_SUCCESS } from "./actionType"

export const  getProductsRequest=()=>{
    return {type: GET_PRODUCTS_REQUEST}
}

export const  getProductsSuccess=(payload)=>{
    return {type: GET_PRODUCTS_SUCCESS, payload}
}

export const  getProductsFailure=()=>{
    return {type: GET_PRODUCTS_FAILURE}
}
export const  postProductsFailure=()=>{
    return {type: POST_PRODUCTS_FAILURE}
}
export const  postProductsRequest=()=>{
    return {type: POST_PRODUCTS_REQUEST}
}
export const  postProductsSuccess=(payload)=>{
    return {type: POST_PRODUCTS_SUCCESS, payload}
}

export const getData =(param,limit,page,query)=>(dispatch)=>{
    console.log(limit);
    dispatch(getProductsRequest())
    axios.get(`https://snapdeal-productapi.onrender.com/mens?_page=${page}&_limit=${limit}&q=${query}`, param)
    .then((res)=> {
        
        dispatch(getProductsSuccess(res.data))
        console.log(res.data)
    })
    .catch((err)=> dispatch(getProductsFailure()))
}

export const getDatabhaii =()=>(dispatch)=>{
    
    dispatch(getProductsRequest())
    axios.get(`https://snapdeal-productapi.onrender.com/mens`)
    .then((res)=> {
        
        dispatch(getProductsSuccess(res.data))
        console.log(res.data)
    })
    .catch((err)=> dispatch(getProductsFailure()))
}

export const getProducts = (param={} ,limit,page,query)=>(dispatch) =>{
    dispatch(getProductsRequest())
   axios.get(`https://snapdeal-productapi.onrender.com/beauty?_page=${page}&_limit=${limit}&q=${query}`,param).then((res)=>{
        console.log(res)
         dispatch(getProductsSuccess(res.data))
    }).catch((err)=> dispatch(getProductsFailure()))
}

export const postData=(newData)=>(dispatch)=>{
    dispatch(postProductsRequest())
    return  axios.post(`https://snapdeal-productapi.onrender.com/posts`, newData)
    .then((res)=>{
        console.log(res.data)
        dispatch(postProductsSuccess(res.data))
    }).catch((err)=> dispatch(postProductsFailure()))
}

//
export const getDataByID =(id)=>(dispatch)=>{
    dispatch(getProductsRequest())
   return axios.get(`https://snapdeal-productapi.onrender.com/${id}`)
    .then((res)=> {
        dispatch(getProductsSuccess(res.data))
        console.log(res.data)
    })
    .catch((err)=> dispatch(getProductsFailure()))
}

// export const deleteProductsRequest=()=>{
//     return {type:DELETE_PRODUCTS_REQUEST}
// }

// export const deleteProductsSuccess=(payload)=>{
//     return {type:DELETE_PRODUCTS_SUCCESS, payload}
// }
// export const deleteProductsFailure=()=>{
//     return {type:DELETE_PRODUCTS_FAILURE}
// }


// export const getCartItem=()=>(dispatch)=>{
//     dispatch(getProductsRequest())
//   return  axios.get(`https://snapdeal-productapi.onrender.com/posts`)
//     .then((res)=>{
//         console.log(res.data)
//         dispatch(getProductsSuccess(res.data))
//     }).catch(()=> dispatch(getProductsFailure()))
// }

// export const deleteCartItem=(id)=>(dispatch)=>{
//     dispatch(deleteProductsRequest())
//    return axios.delete(`https://snapdeal-productapi.onrender.com/posts/${id}`)
//     .then((res)=> dispatch(deleteProductsSuccess(res.data)))
//     .catch(()=> dispatch(deleteProductsFailure()))
//   }