import React from 'react'
import { Spinner,Heading, Box, SkeletonCircle,SkeletonText } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
const Loader = () => {
  return (
    <div style={{size:'lg', textAlign:'center' , paddingLeft:'80%', paddingTop:'50%'}}> 
        <Spinner
  thickness='5px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='lg'
/>

{/* <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box> */}
    </div>
  )
}

export default Loader



{/* <Progress size='xs' isIndeterminate /> */}