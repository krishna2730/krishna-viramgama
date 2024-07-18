import { Flex, SimpleGrid, Box, Tooltip, Text, Image } from "@chakra-ui/react";
import React from "react";

const SkillsGrid = (props) => {
  const { skills } = props;
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      overflowX={"scroll"}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none", // IE and Edge
        scrollbarWidth: "none", // Firefox
      }}
      paddingX={"20px"}
    >
      <Flex
        w={"100%"}
        flexWrap={"wrap"}
        gap={"60px"}
        // justifyContent={"center"}
        // alignItems={"center"}
      >
        {skills.map((item, i) => (
          <Flex key={i} flexDir={"column"} alignItems={"center"}>
            <Flex
              boxSize={["80px", "100px", "100px", "100px"]}
              justifyContent="center"
              alignItems="center"
              cursor={"pointer"}
              _hover={{
                filter: "drop-shadow(0px 2px 3px #000000DD)",
                transform: "scale(1.1)", // Scale/zoom effect on hover
                transition: "transform 0.3s ease-in-out", // Smooth transition effect
              }}
            >
              <Box
                as={Flex}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#FFFFFF"}
                borderRadius={"full"}
                overflow={"hidden"}
                w={"100%"}
                h={"100%"}
                // p={"25%"}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  boxSize={"60%"}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Flex>
            <Text mt={4} color={"#FFFFFFCC"}>
              {item.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default SkillsGrid;
