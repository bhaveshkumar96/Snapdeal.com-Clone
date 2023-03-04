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
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { getData, getMenData, postData } from '../Redux/Products/action';
import { Link } from 'react-router-dom'
import styles from '../Styles/Products.module.css'
import { useEffect } from 'react';

function Rating({ rating }) {      
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
                color={i < rating ? 'yellow.500' : 'yellow.500'}
                // color={'yellow.500'}
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
        {rating}
      </Box>
    </Box>
  );
}
function ProductCards({ id, name, image, price, category, shipping, star }) {
   
  const dispatch = useDispatch()
  const toast = useToast()
  const handdleCart = () => {
    
    const data = {
      name, image, price, category, shipping, star
    }
    dispatch(postData(data)).then(()=>getMenData() )
    
    toast({
      title: 'Added ',
      description: "Congratulations, Added to Cart",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <Flex p={5}  alignItems="center" justifyContent="center"
      zIndex={1.1}
      _hover={{ transform: 'scale(1.05)', }}
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        // maxW="sm"
        width='230px'
        height="320px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {{ category } && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}
        <Link to={`/products/${id}`}>
          <Image
            src={image}
            className={styles.imag} 
            alt={`Picture of ${name}`}
            roundedTop="md"
          />
        </Link>
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {{ category } && (
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
              overflow='hidden'
              isTruncated>
              {name}
            </Box>
            {/* <Tooltip
              size={'50px'}
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              {/* <chakra.a href={''} > */}
                {/* <Icon as={FiShoppingCart} h={5} w={8} alignSelf={'center'}  /> */}
                {/* <Icon as={FiShoppingCart} height={'20px'} width={'20px'} alignSelf={'center'} /> */}
              {/* </chakra.a> */}
            {/* </Tooltip> */} 
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={star}
            />
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="md">
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