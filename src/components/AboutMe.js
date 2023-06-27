import React from "react";
import "./PortfolioStyle.css";

const AboutMe = (props) => {
  const handleDownload = () => {
    const fileUrl = require("../CV Drazen.pdf");
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <div>
      <div className="top-section">
        <p className="about-subheading">
          {props.hi}
          <span>{props.name}</span>
        </p>
        <h2 className="about-heading">{props.title}</h2>
        <div className="cv-flex">
          <div className="left-section">
            <div className="about-info">
              <p>{props.text}</p>
            </div>
            <a href="#" className="btn" onClick={handleDownload}>
              Download CV
            </a>
          </div>
          <div className="right-section">
            <img src={props.img} alt="aboutimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
