import React from "react";
import "./HeroStyle.css";
import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={hero} alt="heroimage" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>Front-end Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
