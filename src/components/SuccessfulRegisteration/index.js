import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./successfulRegisteration.scss";

import Success from "../../images/success.png";

const SuccessfulRegisteration = () => {
  return (
    <div className="App">
      <Header notHome={true} />
      <Flex
        color="black"
        margin="auto"
        mt="70px"
        direction="column"
        width={["100%", "80%"]}
        textAlign="center"
        alignItems="center"
      >
        <Img
          src={Success}
          alt=""
          width="max-content"
          height="auto"
          maxH="300px"
          objectFit="contain"
        />
        <Heading fontSize={["1.2em", "1.5em"]} my={8}>
          Thanks for successfully signing up to LearnWorkNow.ng
        </Heading>
        <Text w={"80%"}>
          Our program advisors would contact you shortly to enable develop a
          custom program and schedule for you. You may wish to return to the
          <Link to="/" style={{ color: "blue" }}>
            {" "}
            home page
          </Link>{" "}
          .
        </Text>
      </Flex>
    </div>
  );
};

export default SuccessfulRegisteration;
