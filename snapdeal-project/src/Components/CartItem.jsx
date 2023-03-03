import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartItem, getCartItem } from '../Redux/Cart/action'
import styles from '../Styles/Products.module.css'
import {Link} from 'react-router-dom'

const CartItem = ({ id, name, image, price, category, shipping, star }) => {

    const dispatch = useDispatch()
    const handleDelete=(id)=>{
        dispatch(deleteCartItem(id)).then(()=>dispatch(getCartItem()))
    }
    
  return (
      <Card margin={'15px'}  spacing={8} gap={'20px'} >  
  <CardBody boxSize={'300px'} >
    <Image className={styles.imag}
      src={image}
      alt={name}
      borderRadius='lg'
    />
    <Stack mt='2' spacing='3'>
      <Heading size='md' overflow='hidden'  noOfLines={1}>{name}</Heading>
      <Text fontSize='1xl'fontWeight={'medium'}>
       {category} <br />
       {shipping}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Rs : {price} 
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
    <ButtonGroup spacing='2' paddingBottom={'5px'}>
        <Button variant='ghost' colorScheme='blue' onClick={()=>handleDelete(id)}>
        Delete
      </Button>
      <Link to={'/checkout'}>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      </Link>  
    </ButtonGroup>
  
</Card>
  )
}

export default CartItem