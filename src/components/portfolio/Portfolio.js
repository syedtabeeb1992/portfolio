import React from "react";

import "./Portfolio.css";

import finkara from "../../assests/images/finkara.png";
import PortfolioSolo from "./PortfolioSolo";

const Portfolio = () => {
  return (
    <section className="box-shadow-beeb" id="portfolio">
      <div className="container">
        <div className="title-section">&#60; Recent Projects &#62;</div>
              <div className="inner-protfolio-wrap">
                    <PortfolioSolo link="https://www.finkara.in/" title="Finkara"/>
              </div>
        <div className="title-section">&#60; /Recent Projects &#62;</div>
      </div>
    </section>
  );
};

export default Portfolio;
