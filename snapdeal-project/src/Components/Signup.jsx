import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
  Container,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";

function Signup() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { handleSignup } = useContext(Appcontext);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container maxW={"5xl"}>
      <HStack>
        <Box flex={1}>
          <Image src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png" />
        </Box>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Sign up
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool feature
              </Text>
            </Stack>
            <form onSubmit={(e) => handleSignup(e, user)}>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          onChange={handleChange}
                          name="name"
                          type="text"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          onChange={handleChange}
                          name="lastname"
                          type="text"
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input onChange={handleChange} name="email" type="text" />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        onChange={handleChange}
                        name="password"
                        type={showPassword ? "text" : "password"}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <FormControl id="age" isRequired>
                    <FormLabel>Age</FormLabel>
                    <Input onChange={handleChange} name="age" type="text" />
                  </FormControl>

                  <FormControl id="gender" isRequired>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      placeholder="Select option"
                      onChange={handleChange}
                      name="gender"
                      type="text"
                    >
                      <option value="option1">Male</option>
                      <option value="option2">Female</option>
                      <option value="option3">Others</option>
                    </Select>
                  </FormControl>
                  <FormControl id="city" isRequired>
                    <FormLabel>City</FormLabel>
                    <Input onChange={handleChange} name="city" type="text" />
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      // value={"Submit"}
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bgImage: "linear-gradient(to right, #58aa50 ,#f09e06 )",
                      }}
                      bgImage={"linear-gradient(to right, #f09e06 , #fc490b )"}
                    >
                      Sign up
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Already a user?{" "}
                      <Link href="login" color={"blue.400"}>
                        Login
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </form>
          </Stack>
        </Flex>
      </HStack>
    </Container>
  );
}
export default Signup;
