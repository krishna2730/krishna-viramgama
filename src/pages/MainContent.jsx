import React from "react";
import { Box } from "@chakra-ui/react";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

const MainContent = () => {
  return (
    <Box w={"100%"} bg="#3C443FED" p={0} m={0}>
      <Home />
      <Skills />
      <Projects />
      <ContactMe />
    </Box>
  );
};

export default MainContent;
