import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCards from '../Components/ProductCards'
import { getDataByID } from '../Redux/Products/action'

const SinglePage = () => {
    const {id}= useParams()
    console.log("id is:", id)
    const product= useSelector((store)=>store.MensProductReducer.product)

    const [data,setData]= useState({})
    const dispatch= useDispatch()
    useEffect(()=>{
        let search= product.find((el)=> el.id===+id)
        search && setData(search)
    },[])
       
    console.log("data is:", data);
  return (
    <div>
      {data && <ProductCards image={data.image} name={data.name} price={data.price} category={data.category} shipping={data.shipping}  star={data.star} />
      }
    </div>
  )
}

export default SinglePage
