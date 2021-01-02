import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./Header.css";

import Logo from "../../images/Group 12.png";

const Header = ({ notHome, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="header">
      <div className="header__logo header__vertical">
        {/* <a> */}
        <span>
          <img src={Logo} alt="logo" onClick={() => history.push("/sign-up")} />
        </span>
        {/* </a> */}
        {/* <em>Coming Soon</em> */}
      </div>
      <div className="header__options">
        <a href="/sign-up" className="header__vertical">
          <span>Sign Up</span>
        </a>
        <a href="/">
          <span>{notHome ? "Home" : "Contact Us"}</span>
        </a>
      </div>
    </div>
  );
};

export default withRouter(Header);
