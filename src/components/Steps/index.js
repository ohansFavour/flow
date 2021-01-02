import React from "react";
import { Flex, Center, Heading } from "@chakra-ui/react";
import Signup from "../../images/signup.svg";
import Develop from "../../images/develop.svg";
import Join from "../../images/join.svg";
import Step from "../step/step";

const data = [
  {
    title: "Sign Up",
    desc:
      "Fill out the simple sign-up form. You would provide us with just enough information to get you started.",
    image: {
      src: Signup,
      alt: "Sign Up",
    },
    step: "Step 1",
  },
  {
    title: "Develop your Learning Plan",
    desc:
      "Our program advisors would contact you through the mediums you selected in your sign-up form and work with you to develop your custom learning plan that is just right for you.",
    image: {
      src: Develop,
      alt: "Develop plan",
    },
    step: "Step 2",
  },
  {
    title: "Join the Learning Cohort",
    desc:
      "Based on your developed  learning plan, you would  be invited to join a learning cohort and your learning begin.",
    image: {
      src: Join,
      alt: "Join cohort",
    },
    step: "Step 3",
  },
];

const Steps = () => {
  return (
    <>
      <Center mb="40px">
        <Heading size="lg" mb="20px" as="h4">
          How To Get Started
        </Heading>
      </Center>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ md: "center" }}
        alignItems={{ base: "center", md: "unset" }}
      >
        {data.map((entry, index) => (
          <Step
            key={index}
            title={entry.title}
            desc={entry.desc}
            image={entry.image}
            step={entry.step}
          />
        ))}
      </Flex>
    </>
  );
};

export default Steps;
