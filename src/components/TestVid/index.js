import React from "react";
import { Scroll } from "react-fns";

import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";

import Barber from "../../images/edgar-chaparro-m8UvH75I2lI-unsplash.png";
import Laptop from "../../images/pexels-ketut-subiyanto-4349950.png";
import Woman from "../../images/pexels-rfstudio-1.png";
import Electronic from "../../images/pexels-caio-1.png";

import Vid from "../../videos/rain.mp4";
import "./testVid.scss";

const TestVid = () => {
  return (
    <Scroll
      render={({ x, y }) => {
        if (y < 150) {
          return (
            <div className="video-bg">
              <div className="overlay-bg"></div>
              <video autoPlay muted loop id="myVideo">
                <source src={Vid} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <div className="test__main" style={{ opacity: `${1 - y / 150}` }}>
                <div>
                  <h1>Kick-start your vocational career</h1>
                  <p>
                    We combine online and offline learning approaches to enable
                    you acquire your desired vocational skill at your own pace.
                  </p>
                  <a href="/sign-up">
                    <button>Sign Up</button>
                  </a>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="section-two">
              <Fade delay={500} bottom duration={2000}>
                <img src={Barber} alt="" className="first" />
              </Fade>
              <Fade delay={1000} bottom duration={2000}>
                <img src={Laptop} alt="" className="second" />
              </Fade>
              <Fade delay={1500} bottom duration={2000}>
                <img src={Woman} alt="" className="third" />
              </Fade>
              <Fade delay={2000} bottom duration={2000}>
                <img src={Electronic} alt="" className="fourth" />
              </Fade>

              <div className="test__main2">
                <div>
                  <h1>Kick-start your vocational career</h1>
                  <p>
                    We combine online and offline learning approaches to enable
                    you acquire your desired vocational skill at your own pace.
                  </p>
                  <Tada duration={2000}>
                    <div>
                      <a href="/sign-up">
                        <button>Sign Up</button>
                      </a>
                    </div>
                  </Tada>
                </div>
              </div>
            </div>
          );
        }
      }}
    />
  );
};

export default TestVid;
