import React from "react";
import aboutimg from "../assets/Drazen.jpg";
import "./PortfolioStyle.css";
import AboutMe from "./AboutMe";
import AboutMeInfo from "./AboutMeInfo";

const Portfolio = () => {
  return (
    <div>
      <div className="container">
        <AboutMe
          hi="Hi, I am"
          name="Drazen Simonovic"
          title="A Front-end developer"
          text="I'm deeply passionate about front-end programming and have a
                strong desire to continuously learn and expand my knowledge in
                this field. Throughout my career, I have consistently achieved
                success and build a solid track record of accomplishments in
                various roles. I thrive on challenging projects and have
                consistently delivered exceptional results, earning recognition
                of my contributions. My dedication to honing my skills and
                staying up-to-date with latest industry trends has been
                instrumental in my professional growth and the successful
                trajectory of my career."
          img={aboutimg}
        />
        <AboutMeInfo />
      </div>
    </div>
  );
};

export default Portfolio;
