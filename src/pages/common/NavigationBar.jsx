import React from "react";
import {
  Flex,
  Link,
  useMediaQuery,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import "../../styles/NavigationBar.css"; // Ensure to import your custom CSS for any additional styling
import { menuList } from "../../utils/route";
import { HiMenu } from "react-icons/hi";
import resume from "../../images/resume.pdf";
import { TbFileDownload } from "react-icons/tb";

export const NavigationBar = () => {
  const [isLargerThan468] = useMediaQuery("(min-width: 600px)");

  return (
    <>
      {isLargerThan468 ? (
        <Flex
          w={"100%"}
          as="nav"
          justifyContent="flex-end"
          bg="#3C443F"
          p={4}
          alignItems={"center"}
          boxShadow={"0px 16px 23px 0px rgba(0,0,0,0.1);"}
        >
          {menuList.map((item) => (
            <Link
              key={item.path}
              as={"a"}
              href={item.path}
              color="white"
              mr={4}
              borderRadius={"8px"}
              px={"12px"}
              py={"10px"}
              fontSize="18px"
              fontWeight={"bold"}
              _hover={{ textDecoration: "none", fontWeight: "bold" }}
            >
              {item.name}
            </Link>
          ))}
          <Tooltip label="Download CV">
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              mr={4}
              borderRadius={"full"}
              bgColor={"#ffffffDD"}
              w={"40px"}
              h={"40px"}
              cursor={"pointer"}
              as={"a"}
              href={resume}
              download={"Krishna_Viramgama"}
              target="_blank"
            >
              <TbFileDownload color="#3C443FED" size={"25px"} />
            </Flex>
          </Tooltip>
        </Flex>
      ) : (
        <Flex alignItems={"end"} justifyContent={"end"} pt={"10px"} pr={"10px"}>
          {/* <IconButton
            bgColor={"#3C443F"}
            icon={<HiMenu color="white" />}
            onClick={onOpen}
          ></IconButton> */}
          <Menu>
            <MenuButton
              as={IconButton}
              w={"45px"}
              h={"45px"}
              _active={{
                bgColor: "#3C443F",
              }}
              _focus={{
                bgColor: "#3C443F",
              }}
              bgColor={"#3C443F"}
              icon={<HiMenu size={"20px"} color="white" />}
              variant="outline"
            />
            <MenuList bgColor={"#3C443F"} outline={"none"} border={"none"}>
              {menuList.map((item, i) => (
                <MenuItem
                  bgColor={"#3C443F"}
                  key={item.path}
                  as={"a"}
                  href={item.path}
                  color="white"
                  mb={2}
                  fontSize="18px"
                  fontWeight={"bold"}
                  _hover={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  {item.name}
                </MenuItem>
              ))}
              <MenuItem
                as={"a"}
                href={resume}
                download={"Krishna_Viramgama"}
                target="_blank"
                bgColor={"#3C443F"}
                alignItems={"center"}
              >
                <Flex gap={1} ml={-1}>
                  <TbFileDownload color="white" size={"25px"} />
                  <Text
                    fontSize={"18px"}
                    textColor={"white"}
                    fontWeight={"normal"}
                  >
                    DOWNLOAD CV
                  </Text>
                </Flex>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )}
      {/* <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody bgColor={"#3C443F"}>
            <VStack w={"100%"} p={4}>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </>
  );
};
