import React from 'react'
import { Spinner,Heading } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
const Loader = () => {
  return (
    <div style={{size:'lg', textAlign:'center' , padding:'50%'}}> 
       {/* <Heading> Loading...</Heading>  */}
        <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='lg'
/>
    </div>
  )
}

export default Loader



{/* <Progress size='xs' isIndeterminate /> */}