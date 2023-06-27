import React, { useState } from "react";
import "./WorkCardStyle.css";
import WorkCard from "./WorkCard";
import ProjectCardData from "./WorkCardData";

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter the project cards based on the selected filter
  const filteredCards =
    selectedFilter === "All"
      ? ProjectCardData
      : ProjectCardData.filter((card) => card.language === selectedFilter);

  // Update the selected filter
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="work-container">
      <h3 className="project-heading">Projects</h3>
      <div className="btn-container">
        <button className="btn" onClick={() => handleFilterChange("All")}>
          All
        </button>
        <button
          className="btn"
          onClick={() => handleFilterChange("TypeScript")}
        >
          TypeScript
        </button>
        <button className="btn" onClick={() => handleFilterChange("React")}>
          React
        </button>
        <button
          className="btn"
          onClick={() => handleFilterChange("JavaScript")}
        >
          JavaScript
        </button>
        <button
          className="btn"
          onClick={() => handleFilterChange("Html & CSS")}
        >
          Html & CSS
        </button>
      </div>
      <div className="project-container">
        {filteredCards.map((value, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
              source={value.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
