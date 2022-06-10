import React from "react";
import ScrollButton from "../ScrollButton/ScrollButton";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

const Projects = () => {
  return (
    <div className="container md:py-12 py-6 mt-2 bg-neutral ">
      <h2 className="text-4xl font-bold text-white text-center ">
        MY <span className="text-warning inline">PROJECTS</span>
      </h2>
      <div className="my-6">
        <Project1 />
      </div>
      <div className="my-6">
        <Project2 />
      </div>
      <div className="my-6">
        <Project3 />
        </div>
        <ScrollButton />
    </div>
  );
};

export default Projects;
