import React from "react";

import "./HeroSection.css";

import dp from "../../assests/images/dp.png";
import frame from "../../assests/images/frame.png";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutubeSquare,
} from "react-icons/fa";

const Herosection = () => {
  return (
    <div className="box-shadow-beeb" id="hero">
      <div className="container">
      <div className="img-wrapper">
        <img src={dp} />
      </div>

      <div className="hero-title">
        <h1>Designer, Front-End Developer</h1>
        <p>I design and code beautiful simple things, and I love what i do</p>

        <div className="socioicons">
          <div className="icons-socio">
            <a href="#">
              <FaInstagram />
            </a>
          </div>
          <div className="icons-socio">
            <a href="#">
              <FaGithub />
            </a>
          </div>
          <div className="icons-socio">
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>

          <div className="icons-socio">
            <a href="#">
              <FaYoutubeSquare />
            </a>
          </div>
        </div>
      </div>

      <div className="bottomFrame">
        <img src={frame} />
      </div>
      </div>
    </div>
  );
};

export default Herosection;
