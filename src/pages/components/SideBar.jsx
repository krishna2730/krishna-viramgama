import React from "react";
import { Box, Flex, Image, Heading, Text, Link, Stack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profileDp from "../../images/cropped_dp.png";

const SideBar = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      h="100vh"
      py={4}
    >
      <Flex w="100%" justifyContent={"center"} textAlign="center">
        <Image
          src={profileDp}
          rounded="full"
          boxSize="270px"
          boxShadow="0px 0px 10px 5px rgba(209,133,76, 0.5)"
          mt={8}
        />
      </Flex>
      <Box w="100%" textAlign="center" mt={6}>
        <Heading as="h2" size="xl">
          Krishna Viramgama
        </Heading>
        <Text color="#DC8445" fontSize="lg">
          Software Engineer
        </Text>
      </Box>
      <Flex justifyContent="center" mb={4}>
        <Stack direction="row" spacing={3}>
          <Link
            href="https://x.com/KrishnaVir92012"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} color="#A95E2D" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/krishna-viramgama/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color="#A95E2D" />
          </Link>
          <Link
            href="https://github.com/krishna2730"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} color="#A95E2D" />
          </Link>
          <Link href="mailto:krishnaviramgama2002@gmail.com">
            <FaEnvelope size={30} color="#A95E2D" />
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SideBar;
