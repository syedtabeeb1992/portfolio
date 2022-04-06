import React from "react";

const ExperienceSolo = (props) => {
  return (
    <div className="rightone firzero ">
      <div className={`yellow-exp-box  primary-bg ${props.classs}`}>
        <div className="yellow-exp-title"> {props.title} </div>
        <div className="yellow-exp-title"> {props.secondaryTitle} </div>
        <div className="yellow-exp-deets"> {props.deets}</div>
        <div className="lower-exp-box ">
          <div className="yellow-exp-deets">{props.expdeets}</div>
          <div className="yellow-comp-logo">
            <img src={props.complogo} alt="s" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSolo;
