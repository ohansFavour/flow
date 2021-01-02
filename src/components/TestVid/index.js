import React from "react";

import Vid from "../../videos/rain.mp4";
import "./testVid.scss";

const TestVid = () => {
  return (
    <div className="video-bg">
      <div className="overlay-bg"></div>
      <video autoPlay muted loop id="myVideo">
        <source src={Vid} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="test__main">
        <div>
          <h1>Kick-start your vocational career</h1>
          <p>
            We combine online and offline learning approaches to enable you
            acquire your desired vocational skill at your own pace.
          </p>
          <a href="/sign-up">
            <button>Sign Up</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestVid;
