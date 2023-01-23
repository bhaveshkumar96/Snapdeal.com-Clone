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
        <HStack p={4}>
        <Text color='blue.600' fontSize='3xl' bg={'yellow.200'} >Total Cart Items: {cart.length>0? cart.length:0}</Text>{' '}{' '}
        <Text color='blue.600' fontSize='3xl' bg={'yellow.200'} >Total Cart Amount: {cart.length>0? cart.reduce((acc,el)=>{
            return acc+ el.price
        },0)
        : 0 }
        </Text>
        </HStack>
        <Link to={'/checkout'}>
        <Button variant='solid' marginLeft={'20px'} colorScheme='blue'>Move to Checkout</Button></Link>
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