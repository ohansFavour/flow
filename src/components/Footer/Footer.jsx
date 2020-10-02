import React from "react";

import "./Footer.css";

import Logo from "../../images/Group 12.png";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="col__container">
          <div className="col">
            <span>+44 345 678 903</span>
            <span> ADOBEXD@MAIL.COM</span>
            <span>FIND A STORE</span>
          </div>

          <div className="col">
            <span>CONTACT US</span>
            <span> ORDERING & PAYMENT</span>
            <span>FIND A STORE</span>
            <span>SHIPPING</span>
            <span>RETURNS</span>
            <span>FAQ</span>
            <span>SHOPPING GUIDE</span>
          </div>

          <div className="col">
            <span>ABOUT ADOBE XD KIT</span>
            <span> WORK WITH US</span>
            <span>PRIVACY POLICY</span>
            <span>TERMS AND CONDITIONS</span>
            <span>PRICE ENQUIRIES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
