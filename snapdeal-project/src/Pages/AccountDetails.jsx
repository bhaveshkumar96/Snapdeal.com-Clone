import { Box, Flex, Image, chakra } from "@chakra-ui/react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdHeadset, MdLocationOn, MdEmail } from "react-icons/md";
import Navbar from "../Components/Navbar";
import React, { useState, useEffect } from "react";

export const AccountDetails = () => {
  const [user, setUser] = useState([]);
  const username = localStorage.getItem("username");
  const userage = localStorage.getItem("userage");
  const useremail = localStorage.getItem("useremail");
  const usercity = localStorage.getItem("usercity");
  const usergender = localStorage.getItem("usergender");

  const getData = (userid) => {
    return fetch(
      `https://erin-average-antelope.cyclic.app/users/register/${userid}`
    ).then((res) => res.json());
  };
  useEffect(() => {
    let userid = localStorage.getItem("userid");

    getData(userid).then((res) => {
      console.log(res);
      setUser(res);
    });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="sm"
          mx="auto"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            objectPosition="center"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="avatar"
          />

          <Flex alignItems="center" px={6} py={3} bg="gray.900">
            <MdHeadset h={6} w={6} color="white" />

            <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
              Focusing
            </chakra.h1>
          </Flex>

          <Box py={4} px={6}>
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{
                color: "white",
              }}
            >
              {username}
            </chakra.h1>

            <chakra.p
              py={2}
              color="gray.700"
              _dark={{
                color: "gray.400",
              }}
            >
              {useremail}
            </chakra.p>

            <Flex
              alignItems="center"
              mt={4}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <BsFillBriefcaseFill h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {usergender}
              </chakra.h1>
            </Flex>

            <Flex
              alignItems="center"
              mt={4}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <MdLocationOn h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {usercity}
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={4}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <MdEmail h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {userage}
              </chakra.h1>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
