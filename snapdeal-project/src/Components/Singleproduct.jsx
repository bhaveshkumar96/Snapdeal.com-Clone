import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    useToast,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { postData } from '../Redux/Products/action';
  
  export default function SingleProduct({ id, name, image, price, category, shipping, star }) {

    const dispatch = useDispatch()
  const toast = useToast()
  const handdleCart = () => {
    // console.log("clicked yaa");
    const data = {
      name, image, price, category, shipping, star
    }
    dispatch(postData(data))
    
    toast({
      title: 'Added ',
      description: "Congratulations, Added to Cart",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={image}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Rs: {price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore */}
                  {category}
                </Text>
                <Text fontSize={'lg'}>
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam. */}
                  {shipping}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>	Fit:Regular Fit</ListItem>
                    <ListItem>	Pattern:Solids</ListItem>{' '}
                    <ListItem>Weave Type:Knitted</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>	Pattern Coverage:All Over</ListItem>
                    <ListItem>	Closure:Button</ListItem>
                    <ListItem>	Fabric:Cotton</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Country of Origin or Manufacture or Assembly
                    </Text>{' '}
                    India
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Net Contents
                    </Text>{' '}
                    1
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Manufacturer's Name & Address
                    </Text>{' '}
                    EMPIRE INDUSTRIAL ENTERPRISES 345 INDUSTIRAL AREA NEAR NAHAR TOWER LUDHIANA PUNJAB-141001
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Description:
                    </Text>{' '}
                    Grab all the attention with this BISHOPCOTTON T-Shirt In Blue Crafted using the finest Cotton Blend this product is the best choice for a contemporary look. Pair with your favourite shoe recommendation to complete the look.
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      T&C:
                    </Text>{' '}
                    The images represent actual product though color of the image and product may slightly differ.{' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={handdleCart}
              >
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }