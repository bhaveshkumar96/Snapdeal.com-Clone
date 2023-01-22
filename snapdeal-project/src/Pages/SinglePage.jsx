import React, { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCards from '../Components/ProductCards'
import { getDataByID } from '../Redux/Products/action'
import { Card, CardHeader, CardBody, CardFooter, Image, Heading,Text,Button } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SingleProduct from '../Components/Singleproduct'
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
      <Navbar/>

      {data && <SingleProduct image={data.image} name={data.name} price={data.price} category={data.category} shipping={data.shipping}  star={data.star} />
      }
      <Footer/>
    </div>
  )
}

export default SinglePage
