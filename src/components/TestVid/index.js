import React from "react";
import { Scroll } from "react-fns";

import Tada from "react-reveal/Tada";

import One from "../../images/1.png";
import Two from "../../images/2.png";
import Three from "../../images/3.png";
import Four from "../../images/4.png";
import Five from "../../images/5.png";
import Six from "../../images/6.png";

import Vid from "../../videos/learn-work.mp4";
import "./testVid.scss";

const TestVid = () => {
  return (
    <Scroll
      render={({ x, y }) => {
        return (
          <div
            className="video-bg"
            style={{
              marginTop: `${y > 500 ? "500px" : "0"}`,
              top: `${y > 500 ? y : 0}`,
              marginBottom: `${y > 500 ? "150px" : "1000px"}`,
            }}
          >
            <div
              className="overlay-bg"
              style={{
                position: `${y > 500 ? "absolute" : "fixed"}`,
                top: `${y > 500 ? y : 0}`,
              }}
            ></div>
            <video
              autoPlay
              muted
              loop
              id="myVideo"
              style={{
                width: `calc((-1 * 100% * ${y} / 300 ) + 100%)`,
                height: `calc((-1 * 100% * ${y} / 300 ) + 100%)`,
                position: `${y > 500 ? "absolute" : "fixed"}`,
                top: `${y > 500 ? y : "50%"}`,
              }}
            >
              <source src={Vid} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div
              className="test-anime"
              style={{
                position: `${y > 500 ? "absolute" : "fixed"}`,
                top: `${y > 500 ? y : 0}`,
              }}
            >
              <div className="test1">
                <img
                  src={One}
                  alt=""
                  className="first"
                  style={{
                    left: `${
                      y < 400
                        ? `calc(((( 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 20% ) * 400) / 400) - 20%)`
                    }`,
                    top: 0,
                  }}
                />
                <img
                  src={Two}
                  alt=""
                  className="first"
                  style={{
                    left: `${
                      y < 400
                        ? `calc(((( 8% + 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 8% + 20% ) * 400) / 400) - 20%)`
                    }`,
                    top: `35%`,
                  }}
                />
                {/* </Fade> */}
                {/* <Fade delay={200} right duration={4000}> */}
                <img
                  src={Three}
                  alt=""
                  className="second"
                  style={{
                    left: `${
                      y < 400
                        ? `calc(((( 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 20% ) * 400) / 400) - 20%)`
                    }`,
                    bottom: 0,
                  }}
                />
                {/* </Fade> */}
                {/* <Fade delay={500} left duration={4000}> */}
                <img
                  src={Four}
                  alt=""
                  className="third"
                  style={{
                    right: `${
                      y < 400
                        ? `calc(((( 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 20% ) * 400) / 400) - 20%)`
                    }`,
                    top: 0,
                  }}
                />
                {/* </Fade> */}
                {/* <Fade delay={400} right duration={4000}> */}
                <img
                  src={Five}
                  alt=""
                  className="first"
                  style={{
                    right: `${
                      y < 400
                        ? `calc(((( 8% + 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 8% + 20% ) * 400) / 400) - 20%)`
                    }`,
                    top: `35%`,
                  }}
                />
                <img
                  src={Six}
                  alt=""
                  className="fourth"
                  style={{
                    right: `${
                      y < 400
                        ? `calc(((( 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 20% ) * 400) / 400) - 20%)`
                    }`,
                    bottom: 0,
                  }}
                />
              </div>

              {/* </Fade> */}
            </div>
            <div
              className="test__main"
              style={{
                position: `${y > 500 ? "absolute" : "fixed"}`,
                top: `${y > 500 ? y : 0}`,
              }}
            >
              <div className="main__content">
                <h1>Kick-start your vocational career</h1>
                <p>
                  Combine online and offline learning to acquire your desired
                  vocational skill at your own pace.
                </p>
                <a href="/signup">
                  <button>Get Started</button>
                </a>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default TestVid;
