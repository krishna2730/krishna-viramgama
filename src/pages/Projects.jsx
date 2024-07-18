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
    <Box
      maxW="100%"
      id="projects"
      px={["10px", "40px", "40px", "40px", "40px", "40px"]}
    >
      <Heading
        color="white"
        fontWeight="700"
        fontSize={["38px", "45px", "45px", "45px", "45px", "45px"]}
        pt="80px"
        pl={"10px"}
      >
        PROJECTS
      </Heading>
      <SimpleGrid
        mt={5}
        columns={[1, 1, 2, 1, 2, 3]}
        spacing={"20px"}
        px={["5px", "20px", "20px", "20px", "20px", "20px"]}
      >
        {projects.map((project, id) => {
          return <ProjectItem key={id} project={project} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
