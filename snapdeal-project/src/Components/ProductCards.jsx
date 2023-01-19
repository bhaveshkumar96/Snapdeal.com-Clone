import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  
  function Rating({rating}) {       //rating = star
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
         <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {/* {numReviews} review{numReviews > 1 && 's'} */}
          { rating}
        </Box> 
      </Box>
    );
  }
  function ProductCards({id,name,image,price,category,shipping, star}) {

console.log("data is :", name )  
return (
      <Flex p={6} w="full"alignItems="center" justifyContent="center"  
      // style={{border:"1px solid gray", gap:'5px', height:"400px"}}
      >
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {/* {data.isNew && ( */}
          {{category} && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image
            src={image}
            size={'md'} 
            // boxSize='180px'
    // objectFit='cover'  
            alt={`Picture of ${name}`}
            roundedTop="md"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {{category} && (
                <Badge rounded="full" px="2" fontSize="20px" colorScheme="red">
                  {category}
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {name}
              </Box>
              <Tooltip
                size={'50px'}
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={5} w={8} alignSelf={'center'} />
                  {/* <Icon as={FiShoppingCart} height={'20px'} width={'20px'} alignSelf={'center'} /> */}
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={star} 
            //   numReviews={data.numReviews}
               />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  Rs.
                </Box>
                {price}
                 {/* .toFixed(2)} */}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductCards;