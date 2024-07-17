import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      w={"100%"}
      id="home"
      m={0}
      px={["15px", "40px", "40px", "40px", "40px", "40px"]}
    >
      <Heading
        color="white"
        fontWeight="700"
        fontSize={["38px", "45px", "45px", "45px", "45px", "45px"]}
        pt="80px"
        pl={"10px"}
      >
        About Me
      </Heading>
      <Flex
        h={"auto"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      ></Flex>
    </Box>
  );
};

export default Home;
