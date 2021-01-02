import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Box>
      <Heading size="md" mb="20px" as="h4">
        Sign Up
      </Heading>
      <Flex w="100%" maxW="500px">
        <FormControl id="contact-name">
          <FormLabel>Name</FormLabel>
          <Input type="name" />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default Signup;
