import React from "react";

import "./About.css";
import about from "../../assests/images/abbout.png";

import cv from "../../assests/Resumene.pdf";


const About = () => {
  return (
    <section className="box-shadow-beeb" id="about">
      <div className="container">
        <div className="title-section">&#60; about &#62;</div>

        <div className="about-inner-wrap">
          <div className="about-txt">
            <p>
              Hey, I am <span className="primary-color">Tabeeb</span>, front-end
              web developer with over 
              <span className="primary-color">   7 of experience. </span>
              I've worked with startups like 
              <span className="primary-color">
       
                 Bounce, Healthcaremagic
              </span>
              etc. was a part of a Racing Team, Raced bikes, played the shit out
              of <span className="primary-color"> Dota 2 and countrestrike </span> 
              , Built a youtube channel and screwed it up. I guess I like to
              stay active.
            </p>

            <p>
              Although I'm very familiar with using frameworks, my websites are
              primarily <span className="primary-color"> hand-coded </span> using
              HTML5, CSS3, SVG & JavaScript and mostly designed using
              <span className="primary-color"> Figma </span>, love working with
              <span className="primary-color"> React </span> and other hip
              frameworks
            </p>
            <p>If you fancy a chat feel free to drop me a line.</p>


              <div className="downloadcv">
                <a href={cv} target="_blank">DOWNLOAD CV</a>
              </div>
            
          </div>

          <div className="about-img">
            <img src={about} />
          </div>
        </div>




        <div className="title-section">&#60; / about &#62;</div>
      </div>
    </section>
  );
};

export default About;
