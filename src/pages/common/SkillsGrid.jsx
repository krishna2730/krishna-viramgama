import { Flex, Box, Text, Image } from "@chakra-ui/react";
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
      py={"10px"}
    >
      <Flex
        w={"100%"}
        flexWrap={"wrap"}
        gap={"60px"}
        justifyContent={"center"}
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
                // filter: "drop-shadow(5px 5px 10px #000000);",
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
                _hover={{ filter: "drop-shadow(5px 5px 10px #000000);" }}
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
