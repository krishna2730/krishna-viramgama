import React from "react";
import { Flex, Box, Link } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/NavigationBar.css"; // Ensure to import your custom CSS for any additional styling
import { menuList } from "../../utils/route";

export const NavigationBar = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
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
  );
};
