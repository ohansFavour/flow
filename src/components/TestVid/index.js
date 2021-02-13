import React from "react";
import { Scroll } from "react-fns";
import { Link } from "react-router-dom";

import One from "../../images/1.png";
import Two from "../../images/2.png";
import Three from "../../images/3.png";
import Four from "../../images/4.png";
import Five from "../../images/5.png";
import Six from "../../images/6.png";

import Poster from "../../images/vocation.png";
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
              poster={Poster}
              style={{
                width: `calc((-1 * 100% * ${y} / 300 ) + 100%)`,
                height: `calc((-1 * 100% * ${y} / 300 ) + 100%)`,
                position: `${y > 500 ? "absolute" : "fixed"}`,
                top: `${y > 500 ? y : "50%"}`,
              }}
            >
              <source
                src="https://learn-work-now.s3.amazonaws.com/learn-work.mp4"
                type="video/mp4"
              />
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
                        ? `calc(((( 2% + 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 2% + 20% ) * 400) / 400) - 20%)`
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
                        ? `calc(((( 13% + 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 13% + 20% ) * 400) / 400) - 20%)`
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
                        ? `calc(((( 2% + 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 2% + 20% ) * 400) / 400) - 20%)`
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
                        ? `calc(((( 2% + 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 2% + 20% ) * 400) / 400) - 20%)`
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
                        ? `calc(((( 13% + 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 13% + 20% ) * 400) / 400) - 20%)`
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
                        ? `calc(((( 2% + 20% ) * ${y}) / 400) - 20%)`
                        : `calc(((( 2% + 20% ) * 400) / 400) - 20%)`
                    }`,
                    bottom: 0,
                  }}
                />
              </div>

              {/* </Fade> */}
            </div>
            <div
              className={`test__main ${y > 200 ? "blacken" : "whiten"}`}
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
                <Link to="/signup">
                  <button>Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default TestVid;
