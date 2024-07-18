import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  UnorderedList,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { achievements, experince } from "../utils/languages";

const Home = () => {
  const CapitalizedText = ({ children }) => {
    return (
      <Text fontSize="23px" color="white" textTransform="uppercase">
        <span style={{ fontSize: "32px" }}>{children.charAt(0)}</span>
        {children.slice(1)}
      </Text>
    );
  };
  return (
    <Box w={"100%"} id="home" m={0}>
      <Heading
        color="white"
        fontWeight="700"
        fontSize={["38px", "45px", "45px", "45px", "45px", "45px"]}
        pt="80px"
        pl={"10px"}
      >
        ABOUT ME
      </Heading>
      <Flex pl={"10px"} h={"auto"} flexDirection={"column"} mt={5}>
        <Box>
          <CapitalizedText>Experince</CapitalizedText>
          <Box mt={-2}>
            {experince.map((item, i) => (
              <Box
                as={"a"}
                cursor={"pointer"}
                href={item.url && item.url !== "" ? item.url : "/"}
                target={item.url && item.url !== "_blank" ? "_blank" : ""}
              >
                <Box
                  key={i}
                  as={Flex}
                  gap={"20px"}
                  p={["20px"]}
                  alignItems={[
                    "start",
                    "start",
                    "center",
                    "center",
                    "center",
                    "center",
                  ]}
                  borderRadius={"14px"}
                  background={
                    "linear-gradient(90deg, #CCCCCC33 0%, rgba(215,149,105,0) 100%)"
                  }
                  flexDir={["column", "column", "row", "row", "row", "row"]}
                  boxShadow={"0px 0px 25px 0px rgba(0,0,0,0.1);"}
                  mb={"20px"}
                >
                  <Box style={{ textDecoration: "none" }}>
                    <Box
                      as={Flex}
                      boxSize={"82px"}
                      bgColor={"white"}
                      borderRadius={"10px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      mr={"20px"}
                    >
                      <Image
                        boxSize={"70px"}
                        borderRadius={"10px"}
                        src={item.logo}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Text fontSize={"24px"} color={"white"}>
                      {item.role}, {item.organisation}
                    </Text>
                    <Text
                      color={"white"}
                      fontWeight={"400"}
                      fontStyle={"italic"}
                      mt={"-20px"}
                    >
                      {item.startDate} - {item.endDate}
                    </Text>
                    <Box mt={"10px"}>
                      {item.experiences.map((exp, j) => (
                        <UnorderedList key={j} m={0}>
                          <ListItem color={"white"}>{exp}</ListItem>
                        </UnorderedList>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box mt={5}>
          <CapitalizedText>Achievements</CapitalizedText>
          <Stack gap={6}>
            {achievements.map((item, i) => (
              <Box
                gap={"20px"}
                p={"20px"}
                alignItems={"center"}
                borderRadius={"14px"}
                background={
                  // "linear-gradient(90deg, rgba(220,132,69,1) 0%, rgba(169,94,45,0) 100%);"
                  "linear-gradient(90deg, #CCCCCC33 0%, rgba(215,149,105,0) 100%)"
                }
                boxShadow={"0px 0px 25px 0px rgba(0,0,0,0.1);"}
              >
                <Text fontSize={"24px"} color={"white"}>
                  {item.title}
                </Text>
                <Text
                  color={"white"}
                  fontWeight={"400"}
                  fontStyle={"italic"}
                  mt={"-20px"}
                >
                  {item.event} - {item.date}
                </Text>
                {item.details.map((exp, i) => (
                  <Box pl={10}>
                    <UnorderedList p={0} m={1}>
                      <ListItem color={"white"}>{exp}</ListItem>
                    </UnorderedList>
                  </Box>
                ))}
              </Box>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
