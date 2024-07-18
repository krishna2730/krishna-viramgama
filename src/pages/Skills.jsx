import { Box, Card, Flex, Heading } from "@chakra-ui/react";
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
    backgroundColor: "#A95E2D",
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
    <Box
      maxW="100%"
      id="skills"
      px={["15px", "40px", "40px", "40px", "40px", "40px"]}
    >
      <Heading
        color="white"
        fontWeight="700"
        fontSize={["38px", "45px", "45px", "45px", "45px", "45px"]}
        pt="80px"
        pl={"10px"}
      >
        SKILLS
      </Heading>
      <Flex
        mt={5}
        direction={["column", "row"]}
        justifyContent={"center"}
        w={"100%"}
      >
        <Flex
          direction={["row", "column"]}
          w={"100%"}
          overflowX={["scroll", "unset"]}
          px={["5px", "20px", "20px", "20px", "20px", "20px"]}
          gap={4}
          flex={1}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none", // IE and Edge
            scrollbarWidth: "none", // Firefox
          }}
        >
          {all.map((item, i) => (
            <Box
              key={i}
              sx={{
                ...(i === step ? activeStyles : inActiveStyles),
                _hover: {
                  backgroundColor: "#A95E2D88",
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
          mt={"10px"}
          style={{
            backgroundColor: "#CCCCCC33",
            borderRadius: "8px",
            padding: "40px 40px",
          }}
          boxShadow={"0px 0px 25px 0px rgba(0,0,0,0.1);"}
          as={Card}
        >
          <SkillsGrid skills={all[step].data} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Skills;
