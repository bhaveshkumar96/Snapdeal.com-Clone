import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, getProducts } from '../Redux/Products/action'
import ProductCards from './ProductCards'
import styles from '../Styles/Products.module.css'
import { useLocation, useSearchParams } from 'react-router-dom'
import { store } from '../Redux/store'
import Loader from './Loader'

const ProductList = () => {
    const dispatch= useDispatch()
    const {product, isLoading} = useSelector((store)=>{return {
      product: store.MensProductReducer.product,
      isLoading :  store.MensProductReducer.isLoading
      }})
    
    const location = useLocation()
  const [searchParams] = useSearchParams()
  console.log(location)
    
    useEffect(()=>{
        const order = searchParams.get("order")   // string return
        let paramObj = {
          params: {
            category: searchParams.getAll("category"),   //return all in array form
            _sort: "price",
            _order: order,
          },
        };
        dispatch(getProducts(paramObj))
      }, [location.search])

    console.log("product", product);
     
    return (       
      <div className={styles.container}>
        {isLoading && <Loader/>}
        {product && product.map((el)=>{
          return <ProductCards key={el.id} id={el.id} name={el.name} image={el.image} price={el.price} category={el.category} shipping={el.shipping} star={el.star}/>
        })}
      </div>
    )
}

export default ProductList
