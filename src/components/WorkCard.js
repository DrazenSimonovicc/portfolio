import React from "react";
import "./WorkCardStyle.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project1" />
      <h3 className="project-title">{props.title}</h3>

      <p className="pro-details">{props.text}</p>

      <div className="pro-btns">
        <NavLink to={props.view} className="btn">
          View
        </NavLink>
        <NavLink to={props.source} className="btn" target="_blank">
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard;
