import React, { useEffect } from "react";
import { Scroll } from "react-fns";
import { withRouter } from "react-router-dom";

import "./Header.css";

import Logo from "../../images/Group 12.png";

const Header = ({ notHome, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Scroll
      render={({ x, y }) => {
        if (y < 1000 && !notHome) {
          return (
            <div
              className="header"
              style={{
                backgroundColor: "transparent",
                color: "white",
                // marginTop: "20px",
              }}
            >
              <div className="header__logo ">
                {/* <a> */}
                <span>
                  <img
                    src={Logo}
                    alt="logo"
                    onClick={() => history.push("/signup")}
                  />
                </span>
                {/* </a> */}
                {/* <em>Coming Soon</em> */}
              </div>
              <div className="header__options">
                <a href="/">
                  <span>Home</span>
                </a>
                <a href="/signup">
                  <span>Sign Up</span>
                </a>
              </div>
            </div>
          );
        } else {
          return (
            <div
              className="header"
              style={{
                borderBottom: "black solid 1px",
                backgroundColor: "white",
              }}
            >
              <div className="header__logo header__vertical">
                {/* <a> */}
                <span>
                  <img
                    src={Logo}
                    alt="logo"
                    onClick={() => history.push("/signup")}
                  />
                </span>
                {/* </a> */}
                {/* <em>Coming Soon</em> */}
              </div>
              <div className="header__options">
                <a href="/" className="header__vertical">
                  <span>Home</span>
                </a>
                <a href="/signup">
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          );
        }
      }}
    />
  );
};

export default withRouter(Header);
