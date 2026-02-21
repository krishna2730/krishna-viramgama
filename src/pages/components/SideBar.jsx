import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Link,
  Stack,
  useMediaQuery,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profileDp from "../../images/cropped_dp.png";

const SideBar = () => {
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  return (
    <Flex
      direction={
        isLargerThan768 && isLargerThan480 && !isLargerThan992
          ? "row"
          : "column"
      }
      alignItems="center"
      justifyContent="space-around"
      h={"100vh"}
      py={4}
    >
      {isLargerThan768 && isLargerThan480 && !isLargerThan992 ? (
        <>
          <Flex
            w="100%"
            justifyContent={"center"}
            textAlign="center"
            flexDirection={"column"}
            px={"50px"}
          >
            <SimpleGrid columns={2}>
              <Heading
                as="h1"
                fontSize={"80px"}
                textAlign={"left"}
                wordBreak={"break-word"}
                flexWrap={"wrap"}
              >
                Hi, I'm Krishna
              </Heading>
              <Box></Box>
              <Text
                color="#DC8445"
                textAlign={"left"}
                fontSize="18px"
                mt={"40px"}
                wordBreak={"break-word"}
                pr={"40px"}
              >
                Backend-focused Software Engineer building scalable APIs and efficient systems. I enjoy working close to the core logic of applications — designing clean architectures, optimizing performance, and making things work reliably at scale.
              </Text>
              <Image
                src={profileDp}
                rounded="full"
                boxSize="270px"
                justifySelf={"center"}
                alignSelf={"center"}
                boxShadow="0px 0px 10px 5px rgba(209,133,76, 0.5)"
              />
            </SimpleGrid>
            <Flex mt={"40px"}>
              <Stack direction="row" spacing={3}>
                <Link
                  href="https://x.com/krishnaVir2909"
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
        </>
      ) : (
        <>
          <Flex w="100%" justifyContent={"center"} textAlign="center">
            <Image
              src={profileDp}
              rounded="full"
              boxSize={["270px", "270px", "270px", "300px", "270px", "270px"]}
              boxShadow="0px 0px 10px 5px rgba(209,133,76, 0.5)"
              mt={8}
              p={0}
            />
          </Flex>
          <Box
            w="100%"
            textAlign="center"
            px={["20px", "40px", "40px", "45px", "40px", "50px"]}
          >
            <Heading
              as="h1"
              fontSize={["40px", "40px", "50px", "60px", "60px", "60px"]}
              textAlign={"left"}
              wordBreak={"break-word"}
              flexWrap={"wrap"}
            >
              Hi, I'm Krishna
            </Heading>
            <Text
              color="#DC8445"
              fontSize="18px"
              textAlign={"left"}
              mt={"20px"}
            >
              I bring almost one year of hands-on experience with the MERN
              stack, focusing on developing modern, scalable, and efficient web
              applications. I am eager to contribute to exciting projects and
              welcome any collaboration or opportunities to connect.
            </Text>
          </Box>
          <Flex justifyContent="center" mb={4}>
            <Stack direction="row" spacing={3}>
              <Link
                href="https://x.com/krishnaVir2909"
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
        </>
      )}
    </Flex>
  );
};

export default SideBar;
