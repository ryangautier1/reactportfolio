import React from "react";
import "./style.css";
import dog from "../../images/dog.png"
import ProjectCard from "../ProjectCard";

const projects = [{
  key: 1,
  title: "Lunch and Wag",
  image: dog,
  alt: "Lunch and Wag Logo",
  description: "An application for finding nearby dog-friendly restaurants, and relevant information about them.",
  deployed: "https://ryangautier1.github.io/Lunch-and-Wag/",
  repo: "https://github.com/ryangautier1/Lunch-and-Wag",
}]

function ProjectContent() {
  return (
    <div className="relative flex flex-col about-content items-center justify-center project-page">
      {projects.map(item => {
        return (
        <ProjectCard {...item} />
        )
      })}
      
    </div>
  )
}

export default ProjectContent;