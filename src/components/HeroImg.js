import React from "react";
import "./HeroImgStyle.css";

const HeroImg = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImg;
