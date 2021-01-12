import React from "react";
import { withRouter } from "react-router-dom";

import { Flex, Text, Image, Heading } from "@chakra-ui/react";

const Step = ({ step, title, desc, image, history }) => {
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
      <Text
        fontSize="md"
        mb="20px"
        onClick={() => {
          if (title === "Sign Up") {
            history.push("/signup");
            window.scroll(0, 0);
          }
        }}
        style={{ cursor: `${title === "Sign Up" ? "pointer" : "text"}` }}
      >
        {step}
      </Text>
      <Heading
        size="md"
        mb="25px"
        as="h4"
        onClick={() => {
          if (title === "Sign Up") {
            history.push("/signup");
            window.scroll(0, 0);
          }
        }}
        style={{ cursor: `${title === "Sign Up" ? "pointer" : "text"}` }}
      >
        {title}
      </Heading>
      <Text fontSize="md" textAlign="left" w="100%" m="0 auto">
        {desc}
      </Text>
    </Flex>
  );
};

export default withRouter(Step);
