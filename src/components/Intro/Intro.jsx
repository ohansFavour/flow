import React from "react";

import "./Intro.css";

import Image from "../../images/pexels-cottonbro-5081968@2x.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__main">
        <h3>Kick-start your vocational career</h3>
        <em>
          We combine online and offline learning approaches to enable you
          acquire your desired vocational skill at your own pace.
        </em>
        <div className="intro__input">
          <input name="intro-input" placeholder="Email" />
          <button className="intro__button">Submit</button>
        </div>
      </div>
      <div className="intro__image">
        <img src={Image} alt="background" />
      </div>
    </div>
  );
};

export default Intro;
