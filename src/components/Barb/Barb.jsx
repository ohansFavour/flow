import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import "./Barb.css";

const Barb = () => {
  return (
    <AwesomeSlider>
      <div className="content one">
        <div className="barb">
          <div className="barb__detail1">Get in-person and online -</div>
          <div className="barb__detail2">Barbing Lessons</div>
          <div className="barb__cta">
            <span>
              Learn work now <span> &#8635;</span>
            </span>
          </div>
        </div>
      </div>

      <div className="content two">
        <div className="barb">
          <div className="barb__detailx">
            Learn <u>technical</u> skills
          </div>
          <div className="barb__cta">
            <span>
              Learn work now <span>&#8631;</span>
            </span>
          </div>
        </div>
      </div>

      <div className="content three">
        <div className="barb">
          <div className="barb__detailx">
            Learn <u>technical</u> skills
          </div>
          <div className="barb__cta">
            <span>
              Learn work now <span>&#8631;</span>
            </span>
          </div>
        </div>
      </div>

      <div className="content four">
        <div className="barb">
          <div className="barb__detailx">
            Learn <u>technical</u> skills
          </div>
          <div className="barb__cta">
            <span>
              Learn work now <span>&#8631;</span>
            </span>
          </div>
        </div>
      </div>
    </AwesomeSlider>
  );
};

export default Barb;
