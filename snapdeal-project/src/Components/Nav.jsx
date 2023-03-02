import {
    Box,
    CloseButton,
    Flex,
    HStack,
    IconButton,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
    useDisclosure,
    VStack,
    chakra,
    Image,
    VisuallyHidden,
    Input,
    Link
  } from "@chakra-ui/react";
  import { BsFillCartFill } from "react-icons/bs";
  import { AiOutlineMenu,AiOutlineSearch } from "react-icons/ai";
  import { FaUserAlt } from "react-icons/fa";
  
  import React from "react";
import SidebarContent from "./SidebarContent";
  export const Nav = () => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    return (
      <React.Fragment >
        <chakra.header
          bg={"#e40046"}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto" style={{position:"sticky",top:"0",zIndex:"9"}}>
            <HStack display="flex" spacing={3} alignItems="center">
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
                <VStack
                  pos="absolute"
                  zIndex={'9'}
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <Link href="/product">Men's</Link>
                  <Link href="/product">Women's</Link>
                  <Link href="/cart">Cart</Link>
                  <Link href="/login">Login</Link>
                  <Link href="/sign-up">Sign-up</Link>
                  {/* <SidebarContent/> */}
                  <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                  />
                </VStack>
              </Box>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
              <Image src="https://i.ibb.co/RD02FRm/final-logo-sastadeal.png" alt="logo" w={"50%"}/>
                <VisuallyHidden>Choc</VisuallyHidden>
              </chakra.a>
  
              <HStack
                spacing={3}
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineSearch />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." w="100%"  color="white"/>
              </InputGroup>
                
              </HStack>
            </HStack>
            <HStack
              spacing={10}
              display={mobileNav.isOpen ? "none" : "flex"}
              alignItems="center"
            >
              
  
              <chakra.a
                p={3}
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                rounded="sm"
                _hover={{
                  color: "gray.800",
                  _dark: {
                    color: "gray.600",
                  },
                }}
              >
               <BsFillCartFill/>
              </chakra.a>
  
              <FaUserAlt/>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
  };
  