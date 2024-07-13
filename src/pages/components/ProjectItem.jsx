import React from "react";
import { getImageUrl } from "../../utils/common";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Stack } from "react-bootstrap";
import project from "../../images/project.png";

const ProjectItem = ({
  project: { title, imageSrc, skills, demo, source },
}) => {
  return (
    <>
      <Card>
        <CardBody>
          <Flex flexDir={"column"}>
            <Image
              style={{
                marginBottom: "26px",
              }}
              src={project}
              alt={`Image of ${title}`}
            />
            <Stack mt="6" spacing="3">
              <Heading
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                }}
                as={"h3"}
              >
                {title}
              </Heading>
              <UnorderedList
                style={{
                  width: "auto",
                  marginTop: "14px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "6px",
                  listStyle: "none",
                }}
              >
                {skills.map((skill, id) => {
                  return (
                    <ListItem
                      key={id}
                      style={{
                        fontSize: "17px",
                        fontWeight: 500,
                        borderRadius: "100px",
                        backgroundColor: "#77291B",
                        color: "white",
                        padding: "2px 22px",
                      }}
                    >
                      {skill}
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Stack>
          </Flex>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button as={"a"} href={demo} variant="solid" colorScheme="blue">
              Demo
            </Button>
            <Button as={"a"} href={source} colorScheme="blue">
              Source Code
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectItem;
