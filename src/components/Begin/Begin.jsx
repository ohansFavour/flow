import React from "react";
import { Link } from "react-router-dom";

import "./Begin.css";

const Begin = () => {
  return (
    <div className="begin">
      <h3>Begin your one of a kind apprenticeship</h3>
      <Link to="/signup">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Begin;
