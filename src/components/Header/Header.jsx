import React from "react";
import "./Header.css";

import Logo from "../../images/Group 12.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo header__vertical">
        <span>
          <img src={Logo} alt="logo" />
        </span>
        <em>Coming Soon</em>
      </div>
      <div className="header__options">
        <span className="header__vertical">Contact Us</span>
        <span>Sign Up</span>
      </div>
    </div>
  );
};

export default Header;
