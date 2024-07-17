import { Flex, SimpleGrid, Box, Tooltip, Text, Image } from "@chakra-ui/react";
import React from "react";

const SkillsGrid = (props) => {
  const { skills } = props;
  return (
    <Flex
      justifyContent={"center"}
      w={"100%"}
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
      <SimpleGrid columns={[2, 2, 3, 3, 3, 4]} spacing={"60px"}>
        {skills.map((item, i) => (
          // <Tooltip label={item.name}>
          <Flex key={i} flexDir={"column"} alignItems={"center"}>
            <Flex
              key={i}
              boxSize="120px"
              justifyContent="center"
              alignItems="center"
              paddingX={"20px"}
              cursor={"pointer"}
              _hover={{
                filter: "drop-shadow(0px 2px 3px #000000DD)",
                transform: "scale(1.1)", // Scale/zoom effect on hover
                transition: "transform 0.3s ease-in-out", // Smooth transition effect
              }}
            >
              <Image
                src={item.icon}
                alt={item.name}
                w={["100%", "100%", "70%", "70%"]}
                h={["100%", "100%", "70%", "70%"]}
                style={{
                  objectFit: "contain",
                }}
              />
            </Flex>
            <Text mt={4} color={"#FFFFFFCC"}>
              {item.name}
            </Text>
          </Flex>
          // </Tooltip>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default SkillsGrid;
