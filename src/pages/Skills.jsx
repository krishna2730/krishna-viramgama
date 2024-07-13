import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import SkillsGrid from "./common/SkillsGrid";
import { all } from "../utils/languages";

const Skills = () => {
  const [step, setStep] = useState(0);
  const activeStyles = {
    width: "auto",
    // height: '50px',
    padding: "15px 20px",
    borderRadius: "8px",
    backgroundColor: "#77291B",
    margin: "5px 0",
    color: "white",
    fontWeight: "bold",
  };

  const inActiveStyles = {
    width: "auto",
    // height: '50px',
    padding: "15px 20px",
    borderRadius: "8px",
    backgroundColor: "white",
    margin: "5px 0",
    color: "black",
    fontWeight: "bold",
  };

  return (
    <Box maxW="100%" minH="100vh" id="skills">
      <Heading
        ml={"40px"}
        color="white"
        fontWeight="700"
        fontSize="45px"
        pt="80px"
      >
        Skills
      </Heading>
      <Flex
        mt={"40px"}
        direction={["column", "row"]}
        justifyContent={"center"}
        w={"100%"}
      >
        <Flex
          direction={["row", "column"]}
          w={"100%"}
          overflowX={["scroll", "unset"]}
          px={"20px"}
          gap={4}
          flex={1}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none", // IE and Edge
            "scrollbar-width": "none", // Firefox
          }}
        >
          {all.map((item, i) => (
            <Box
              key={i}
              sx={{
                ...(i === step ? activeStyles : inActiveStyles),
                _hover: {
                  backgroundColor: "#77291B88",
                  color: "white",
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                setStep(i);
              }}
              as={Flex}
              alignItems={"center"}
            >
              {item.name}
            </Box>
          ))}
        </Flex>
        <Flex
          flex={2}
          style={{
            backgroundColor: "#CCCCCC22",
            borderRadius: "8px",
            margin: "0 15px",
            padding: "40px 40px",
          }}
        >
          <SkillsGrid skills={all[step].data} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Skills;
