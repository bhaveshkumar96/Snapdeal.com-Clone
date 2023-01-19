import { Heading } from '@chakra-ui/react';
import React from 'react'
import { FaHeart } from "react-icons/fa";
export default function ProductCard({product}) {
  return (
    <div style={{border:"1px solid black"}}>
          <div style={{color:"red", marginLeft:"80px" }}>
            {<FaHeart/>}
          </div> 
        <img src={product.image} alt="" width="100%"/>
        <Heading  as='h4' size='sm' >Name: {product.name}</Heading>
        <Heading  as='h5' size='sm' color={"red"}>Price: {product.price}</Heading>
        <Heading  as='h6' size='sm' color={"yellow.500"}>Category: {product.category}</Heading>
        <h5>Shipping: {product.shipping}</h5>
        {/* <p>{product.star}</p> */}
    </div>
  )
}
