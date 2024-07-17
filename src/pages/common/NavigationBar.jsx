import React from "react";
import {
  Flex,
  Box,
  Link,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/NavigationBar.css"; // Ensure to import your custom CSS for any additional styling
import { menuList } from "../../utils/route";
import { Stack } from "react-bootstrap";
import { HiMenu } from "react-icons/hi";

export const NavigationBar = () => {
  // const location = useLocation();
  const [isLargerThan468] = useMediaQuery("(min-width: 468px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const pathName = location.hash;

  return (
    <>
      {isLargerThan468 ? (
        <Flex w={"100%"} as="nav" justifyContent="flex-end" bg="#3C443F" p={4}>
          {menuList.map((item) => (
            <Link
              key={item.path}
              as={"a"}
              href={item.path}
              color="white"
              mr={4}
              fontSize="18px"
              fontWeight={pathName === item.path ? "bold" : "normal"}
              _hover={{ textDecoration: "none", fontWeight: "bold" }}
            >
              {item.name}
            </Link>
          ))}
        </Flex>
      ) : (
        <Flex alignItems={"end"} justifyContent={"end"} pt={"10px"} pr={"10px"}>
          <IconButton
            bgColor={"#3C443F"}
            icon={<HiMenu color="white" />}
            onClick={onOpen}
          ></IconButton>
        </Flex>
      )}
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Stack w={"100%"} as="nav" bg="#3C443F" p={4}>
              {menuList.map((item) => (
                <Link
                  key={item.path}
                  as={"a"}
                  href={item.path}
                  color="white"
                  mb={2}
                  fontSize="18px"
                  fontWeight={pathName === item.path ? "bold" : "normal"}
                  _hover={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
