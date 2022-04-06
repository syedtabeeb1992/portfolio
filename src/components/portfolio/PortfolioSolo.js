import React from "react";

const PortfolioSolo = (props) => {
  return (
    <div className="portfolio">
      <a href={props.link} className="folio-m finkara" target="_blank">
        <div className="project-title">{props.title}</div>
      </a>
    </div>
  );
};

export default PortfolioSolo;
