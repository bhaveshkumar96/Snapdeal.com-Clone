
// import { useDispatch } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom"
// import { GoogleLogin } from "@leecheuk/react-google-login";
import React, { useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import login from "../../Redux/LoginAuth/action";
import { LOGIN_SUCCESS } from "../../Redux/LoginAuth/actionTypes";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Login = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((store) => store.LoginReducer.isLoading);
  const responseGoogle = (response) => {
    console.log(response);
  };

  const loginHandler = () => {
    if (email.includes("@sastadeal.com")) {
      if (email && password) {
        const params = {
          email,
          password,
        };
        dispatch(login(params)).then((res) => {
          if (res === LOGIN_SUCCESS) {
            // console.log(res);
            toast({
              description: "Signed in successfully",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            navigate("/admin", { replace: true });
          } else {
            toast({
              description: "Failed",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
          }
        });
      }
    } else {
      if (email && password) {
        const params = {
          email,
          password,
        };
        dispatch(login(params)).then((res) => {
          if (res === LOGIN_SUCCESS) {
            // console.log(res);
            toast({
              description: "Signed in successfully",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            navigate("/", { replace: true });
          } else {
            toast({
              description: "Failed",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
          }
        });
      }
    }
  };

  return (
    <Box height="85vh" bg="#ffffff" padding="0px">
      <Navbar/>
      <Divider orientation="horizontal" />
      <Box
        width="1150px"
        position="center"
        margin="auto"
        height="100%"
        padding="20px 0px 60px 0px"
      >
        <Box width="20%" textAlign="left" padding="">
          <Breadcrumb fontWeight="light" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/sign-in">Sign-In</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box width="100%" padding="20px 0px 50px">
          <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
            Welcome Back
          </Heading>
        </Box>
        <Divider orientation="horizontal" />
        <Box width="50%" margin="0 auto" padding="50px 0px 50px 0px">
          <Stack spacing={4}>
            <Box>
              <FormControl>
                <FormLabel fontWeight="hairline">Email address *</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                  borderRadius="0px"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontWeight="hairline">Password *</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="password"
                  size="lg"
                  borderRadius="0px"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Box>
          </Stack>
          <Box paddingTop="50px">
            Register on SastaDeal💅?{" "}
            <Link color="teal.500" href="sign-up">
              Sign Up
            </Link>
          </Box>
          <Box>
            {/* <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            /> */}
          </Box>
          <Button
            borderRadius="0px"
            width="180px"
            color="white"
            background="#302C26"
            padding="20px"
            marginTop="20px"
            _hover={{
              color: "#302C26",
              background: "#ffffff",
              border: "1px solid black",
            }}
            onClick={loginHandler}
            isLoading={isLoading}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Login;
