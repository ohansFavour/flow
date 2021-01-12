import React from "react";
import { Flex, Center, Heading } from "@chakra-ui/react";
import Signup from "../../images/signup.svg";
import Develop from "../../images/stage2.svg";
import Join from "../../images/join.svg";
import Step from "../step/step";

const data = [
  {
    title: "Sign Up",
    desc:
      "Fill out the simple signup form. You would provide us with just enough information to get you started.",
    image: {
      src: Signup,
      alt: "Sign Up",
    },
    step: "Step 1",
  },
  {
    title: "Develop your Learning Plan",
    desc:
      "Work with our program advisors to develop your flexible custom learning plan.",
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
        <Heading size="lg" mb="50px" as="h4" fontSize={["1.5em", "2.5em"]}>
          How To Get Started
        </Heading>
      </Center>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ lg: "center" }}
        alignItems={{ base: "center", lg: "unset" }}
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
