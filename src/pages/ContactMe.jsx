import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import contactMe from "../images/contact_us.svg";
import { LuUser } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineMessage } from "react-icons/md";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_d7er87l",
        "template_vpkh0nk",
        form.current,
        "HIJhO0F-K4zt8JlKU"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Box
      id="contact"
      maxW="100%"
      px={["10px", "40px", "40px", "40px", "40px", "40px"]}
      pb={"50px"}
    >
      <Heading
        color="white"
        pl={"10px"}
        fontWeight="700"
        fontSize={["38px", "45px", "45px", "45px", "45px", "45px"]}
        pt="80px"
      >
        Contact Me
      </Heading>
      <Flex
        backgroundColor="#CCCCCC22"
        w={"100%"}
        mt={4}
        borderRadius={"8px"}
        flexDir={["column", "column", "row", "column", "column", "row"]}
        p={["20px"]}
      >
        <Box
          as={"form"}
          display={"flex"}
          flexDirection="column"
          flex={1}
          px={["5px", "20px", "20px", "20px", "20px", "20px"]}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          ref={form}
          onSubmit={sendEmail}
        >
          <FormControl isRequired isInvalid={formErrors.name}>
            <FormLabel color={"white"}>Name </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LuUser fontWeight={"600"} />
              </InputLeftElement>
              <Input
                type="text"
                bgColor={"white"}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </InputGroup>
            {formErrors.name && (
              <FormErrorMessage>{formErrors.name}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={formErrors.email}>
            <FormLabel color={"white"}>Email </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdOutlineEmail fontWeight={"600"} />
              </InputLeftElement>
              <Input
                type="email"
                bgColor={"white"}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </InputGroup>
            {formErrors.email && (
              <FormErrorMessage>{formErrors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={formErrors.message}>
            <FormLabel color={"white"}>Message </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdOutlineMessage fontWeight={"600"} />
              </InputLeftElement>
              <Textarea
                bgColor={"white"}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                pl={10}
              />
            </InputGroup>
            {formErrors.message && (
              <FormErrorMessage>{formErrors.message}</FormErrorMessage>
            )}
          </FormControl>
          <Button
            type="submit"
            w={"100%"}
            mt={5}
            color={"white"}
            bgColor={"#A95E2D"}
            _hover={{
              bgColor: "#A95E2DBB",
            }}
          >
            Send Message
          </Button>
        </Box>
        <Box
          flex={1}
          p={"20px"}
          as={Flex}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            px={["0px", "20px", "20px", "20px", "20px", "20px"]}
            src={contactMe}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactMe;
