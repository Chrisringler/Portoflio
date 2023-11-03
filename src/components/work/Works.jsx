import React from "react";
import {projectData,  projectNav } from "./Data"
import WorksItems from "./WorksItems";

const Works = () => {
    return (
      <div>
        <div className="work__filters">
          {projectNav.map((item, index) => {
            return (
              <span className="work__item" key={index}>
                {item.name}
              </span>
            );
          })}
        </div>
  
        <div className="work__container container grid">
          {projectData.map((item) => {
            return <WorksItems item={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  };

export default Works