import React from "react";
import {
  Box,
  Image,
  Link,
  Icon,
  Tag,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";

const ProjectItem = ({
  project: { title, imageSrc, skills, demo, source },
}) => {
  return (
    <Card
      style={{
        borderRadius: "24px",
      }}
    >
      <CardBody
        style={{
          borderRadius: "24px",
          // display: "flex",
          // alignItems: "center",
          padding: "8px",
        }}
      >
        <Box
          position="relative"
          _hover={{
            "& .hover-overlay": {
              opacity: 1,
              borderRadius: "16px",
            },
            "& .hover-icon": {
              opacity: 1,
              borderRadius: "16px",
            },
          }}
        >
          <Link href={demo} isExternal position="relative" display="block">
            <Image
              borderRadius={"16px"}
              src={imageSrc}
              border={"0.5px solid #00000044"}
              alt={`Image of ${title}`}
              objectFit={"cover"}
              // w={"100%"}
              // h={["300px", "300px", "300px", "300px", "300px", "400px"]}
            />
            <Box
              className="hover-overlay"
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="rgba(0, 0, 0, 0.5)"
              opacity="0"
              transition="opacity 0.3s ease-in-out"
            ></Box>
            <Icon
              as={FiExternalLink}
              className="hover-icon"
              position="absolute"
              top="10px"
              right="10px"
              boxSize="24px"
              color="white"
              opacity="0"
              transition="opacity 0.3s ease-in-out"
            />
          </Link>
        </Box>
      </CardBody>
      <CardFooter>
        <Box>
          <Link
            href={demo}
            isExternal
            color={"#77291B"}
            fontSize={"18px"}
            mt={2}
            lineHeight={"24px"}
            _hover={{
              textUnderlineOffset: "4px",
              textDecor: "underline",
              textDecorationThickness: "2.2px",
            }}
          >
            {title}
          </Link>
        </Box>
        <HStack
          as={Flex}
          mt="4"
          w={"100%"}
          spacing="3"
          wrap={"wrap"}
          justifySelf={"flex-end"}
        >
          {skills.map((skill, id) => {
            return (
              <Tag size={"md"} key={id} bgColor={"#A95E2D"} color={"white"}>
                {skill}
              </Tag>
            );
          })}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
