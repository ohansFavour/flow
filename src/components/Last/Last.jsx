import React from "react";

import "./Last.css";

const Last = () => {
  const year = new Date().getFullYear();
  return <div className="last">&#169; {year} LearnWorkNow</div>;
};

export default Last;
