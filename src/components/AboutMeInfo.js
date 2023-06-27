import React from "react";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Education } from "./Education";

const AboutMeInfo = () => {
  return (
    <div>
      <div className="about-info-items">
        <div className="about-info-item">
          <h4>Education</h4>
          <div className="education-box">
            {Education.map((item, index) => {
              return (
                <div className={item.cName} key={index}>
                  <h5>{item.education}</h5> <p>{item.school}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="about-info-item">
          <h4>Skills</h4>
          <div className="skill-box">
            {Skills.map((item, index) => {
              return (
                <span className={item.cName} key={index}>
                  {item.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="about-info-item">
          <h4>Experience</h4>
          <div className="experience-box">
            {Experience.map((item, index) => {
              return (
                <div className={item.cName} key={index}>
                  <h5>{item.year}</h5> <p>{item.titleAndWP}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeInfo;
