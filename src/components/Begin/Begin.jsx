import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Begin.css";

const Begin = ({ history }) => {
  return (
    <div className="begin">
      <h3>Begin your one of a kind apprenticeship</h3>
      <Link to="/signup">
        <button>Sign up now</button>
      </Link>
    </div>
  );
};

export default withRouter(Begin);
