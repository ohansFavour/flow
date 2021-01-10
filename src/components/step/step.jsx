import React from "react";

import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";

const Step = ({ step, title, desc, image }) => {
  return (
    <Flex
      direction="column"
      textAlign="center"
      maxW="265px"
      width={["100%", "100%", "auto"]}
      margin={{
        base: "40px 0",
        lg: "0 40px",
      }}
    >
      <Image src={image.src} alt={image.alt} mb="25px" />
      <Text fontSize="md" mb="20px">
        {step}
      </Text>
      <Heading size="md" mb="25px" as="h4">
        {title}
      </Heading>
      <Text fontSize="md" textAlign="left" w="100%" m="0 auto">
        {desc}
      </Text>
    </Flex>
  );
};

export default Step;
