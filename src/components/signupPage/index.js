import React, { useEffect } from "react";
import Form from "../Form";
import Header from "../Header/Header";

const SignupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="AppForm">
      <Header notHome={true} />
      <Form />
    </div>
  );
};

export default SignupPage;
