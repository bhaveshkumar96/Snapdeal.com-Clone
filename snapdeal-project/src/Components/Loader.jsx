import React from 'react'
import { Spinner, Heading, Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
const Loader = () => {
  return (
    <div style={{ size: 'lg', textAlign: 'center', paddingLeft: '80%', paddingTop: '50%' }}>
      <Spinner
        thickness='5px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='lg'
      />
    </div>
  )
}

export default Loader



{/* <Progress size='xs' isIndeterminate /> */ }