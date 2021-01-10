import React from "react";
import { Scroll } from "react-fns";

import Tada from "react-reveal/Tada";

import Barber from "../../images/edgar-chaparro-m8UvH75I2lI-unsplash.png";
import Laptop from "../../images/pexels-ketut-subiyanto-4349950.png";
import Woman from "../../images/pexels-rfstudio-1.png";
import Electronic from "../../images/pexels-caio-1.png";

import Vid from "../../videos/learn-work.mp4";
import "./testVid.scss";
import Steps from "../Steps";

const TestVid = () => {
  return (
    <Scroll
      render={({ x, y }) => {
        if (y < 300) {
          return (
            <div className="video-bg">
              <div className="overlay-bg"></div>
              <video autoPlay muted loop id="myVideo">
                <source src={Vid} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <div className="test__main" style={{ opacity: `${1 - y / 300}` }}>
                <div>
                  <h1>Kick-start your vocational career</h1>
                  <p>
                    Combine online and offline learning to acquire your desired
                    vocational skill at your own pace.
                  </p>
                  <a href="/sign-up">
                    <button>Get Started</button>
                  </a>
                </div>
              </div>
            </div>
          );
        } else if (y < 600) {
          return (
            <div className="section-two-cont">
              <div className="section-two-container">
                <div className="section-two">
                  {/* <Fade delay={100} left duration={4000}> */}
                  <img
                    src={Barber}
                    alt=""
                    className="first"
                    style={{
                      left: `calc(((20%  * (${y} - 200)) / 400) - 20%)`,
                      top: 0,
                    }}
                  />
                  {/* </Fade> */}
                  {/* <Fade delay={200} right duration={4000}> */}
                  <img
                    src={Laptop}
                    alt=""
                    className="second"
                    style={{
                      right: `calc(((20%  * (${y} - 200)) / 400) - 20%)`,
                      top: 0,
                    }}
                  />
                  {/* </Fade> */}
                  {/* <Fade delay={300} left duration={4000}> */}
                  <img
                    src={Woman}
                    alt=""
                    className="third"
                    style={{
                      left: `calc(((20%  * (${y} - 200)) / 400) - 20%)`,
                      bottom: 0,
                    }}
                  />
                  {/* </Fade> */}
                  {/* <Fade delay={400} right duration={4000}> */}
                  <img
                    src={Electronic}
                    alt=""
                    className="fourth"
                    style={{
                      right: `calc(((20%  * (${y} - 200)) / 400) - 20%)`,
                      bottom: 0,
                    }}
                  />
                  {/* </Fade> */}

                  <div className="test__main2">
                    <div>
                      <h1>Kick-start your vocational career</h1>
                      <p>
                        Combine online and offline learning to acquire your
                        desired vocational skill at your own pace.
                      </p>
                      <Tada duration={5000}>
                        <div>
                          <a href="/sign-up">
                            <button>Get Started</button>
                          </a>
                        </div>
                      </Tada>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="stage3">
              <Steps />
            </div>
          );
        }
      }}
    />
  );
};

export default TestVid;
