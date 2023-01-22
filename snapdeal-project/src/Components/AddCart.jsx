import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../Styles/Products.module.css'
import Loader from './Loader'
import {Box, Heading, Text, Button, HStack} from '@chakra-ui/react'
import CartItem from './CartItem'
import { getCartItem } from '../Redux/Cart/action'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const AddCart = () => {
    const dispatch= useDispatch()
    const {cart, isLoading} = useSelector((store)=>{return {
    cart: store.CartReducer.cart,   
    isLoading :  store.CartReducer.isLoading
    }})
    console.log("cart",cart)
    useEffect(()=>{  
        dispatch(getCartItem())
      }, [])
     
    return (       
    <div>
        <Navbar/>
      <div styles={{width:'100%', margin:'auto'}}>
        <HStack>
        <Text>Total Cart Items: {cart.length>0? cart.length:0}</Text>{' '}{' '}
        <Text>Total Cart Amount: {cart.length>0? cart.reduce((ac,el,index)=>{
            return el.price
        },0)
        : 0 }</Text></HStack>
        <Link to={'/checkout'}>
            <br />
        <Button>Move to Checkout</Button></Link>
        <br/>
      <Box className={styles.cartItem} >
        {isLoading && <Loader/>}
        {cart.length>0 && cart.map((el)=>{
          return <CartItem key={el.id} id={el.id} name={el.name} image={el.image} price={el.price} category={el.category} shipping={el.shipping} star={el.star}/>
        })}
      </Box>      
      
      </div>
      <Footer/>
      </div>
    )
}

export default AddCart