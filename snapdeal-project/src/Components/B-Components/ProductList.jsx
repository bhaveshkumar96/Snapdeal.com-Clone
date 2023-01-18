import { Box, Flex, Heading, Input, Spacer, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { getProducts, getProductsFailureAction, getProductsRequestAction, getProductsSuccessAction } from '../Redux/Products/action'
import ProductCard from './ProductCard'

export default function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector((store)=>store.productReducer.products)
  console.log("data my",products)
  const location = useLocation()
  const [searchParams] = useSearchParams()


   const getProducts = (param={})=>(dispatch) =>{
    dispatch(getProductsRequestAction())
    axios.get("https://snapdeal-productapi.onrender.com/beauty",param).then((res)=>{
        console.log(res)
        dispatch(getProductsSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(getProductsFailureAction())
    })
}

  useEffect(()=>{
     const order = searchParams.get("order")
     let paramObj = {
      params: {
        category: searchParams.getAll("category"),
        _sort: order && "name",
        _order: order
      }

     }
   dispatch(getProducts(paramObj))
  },[location.search])
  return (
    <Stack>
      <Flex>
        <Heading as='h4' size='md'>
            Dresses, Gowns & Jumpsuits( 7571 Items)
        </Heading>
        <Spacer/>
        <Input placeholder='Basic usage' size={"lg"}/>
      </Flex>
    <DivWrapper>
      {
        products.length>0 && products.map((el)=>{
          return <ProductCard key={el.id} product={el}/>
        })
      }
    </DivWrapper>
    </Stack> 
  )
}


const DivWrapper = styled.div`
border:1px solid red;
 display: grid;
 grid-template-columns: repeat(4,1fr);
 grid-gap: 10px

 
`