import React from "react";
import { withRouter } from "react-router-dom";

import "./Begin.css";

const Begin = ({ history }) => {
  return (
    <div className="begin">
      <h3>Begin your one of a kind apprenticeship</h3>
      <span onClick={() => history.push("/signup")}>
        <button>Sign up now</button>
      </span>
    </div>
  );
};

export default withRouter(Begin);
