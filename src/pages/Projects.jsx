import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { projects } from "../utils/languages";
import ProjectItem from "./components/ProjectItem";

const Projects = () => {
  return (
    <Box maxW="100%" minH="100vh" id="projects">
      <Heading
        ml={"40px"}
        color="white"
        fontWeight="700"
        fontSize="45px"
        pt="80px"
      >
        Projects
      </Heading>
      <SimpleGrid
        ml={"40px"}
        mt={"30px"}
        columns={[1, 2, 2, 3]}
        spacing={"20px"}
      >
        {projects.map((project, id) => {
          return <ProjectItem key={id} project={project} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
