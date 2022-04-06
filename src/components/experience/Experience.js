import React from "react";
import "./Experiencs.css";

import about from "../../assests/images/starlines.png";
import stixisLogo from "../../assests/images/stixlogo.png";
import bounceLogo from "../../assests/images/bounce.png";
import ebix from "../../assests/images/ebix.png";
import cuisinelinksLogo from"../../assests/images/cuisinelinks.png"
import ExperienceSolo from "./ExperienceSolo";

const Experience = () => {
  return (
    <section className="box-shadow-beeb exp-container " id="exp">
      <div className="container">
        <div className="title-section">&#60; Work Experiance &#62;</div>

        <div className="mid-exp">
          <div className="lineimg">
            <img src={about} />
          </div>

          <div className="lineone lio">
            <div className="leftone firzero "> </div>

            <ExperienceSolo
              title="SENIOR WEB DEVELOPER"
              deets="Stixis Technologies · Full-time"
              expdeets="Aug 2021 - April 2022"
              complogo={stixisLogo}
            />
          </div>

          <div className="lineone lio">
            <ExperienceSolo
              title="SENIOR FRONT-END DEVELOPER"
              secondaryTitle = "FRONT-END DEVELOPER"
              deets="Bounce"
              expdeets="Oct 2017 - Mar 2020 "
              complogo={bounceLogo}
              classs="fl-ri"
            />

            <div className="leftone "> </div>
          </div>

          <div className="lineone lio">
            <div className="leftone "> </div>
            <ExperienceSolo
              title="FRONT-END DEVELOPER"
              deets="Ebix software"
              expdeets="Dec 2015 - Oct 2017"
              complogo={ebix}
            />
          </div>

          <div className="lineone lio">
            <ExperienceSolo
              title="APPLICATION PROGRAMMER"
              deets="Cuisine Links"
              expdeets="Jan 2015 - Dec 2015 "
              classs="fl-ri"
              complogo={cuisinelinksLogo}
            />
            <div className="leftone "> </div>
          </div>
        </div>

        <div className="title-section">&#60; / Work Experiance &#62;</div>
      </div>
    </section>
  );
};

export default Experience;
