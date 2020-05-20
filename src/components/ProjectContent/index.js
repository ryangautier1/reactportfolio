import React from "react";
import "./style.css";
import dog from "../../images/dog.png";
import w4 from "../../images/w4logo.png";
import ProjectCard from "../ProjectCard";

const projects = [
  {
  key: 1,
  title: "Lunch and Wag",
  image: dog,
  alt: "Lunch and Wag Logo",
  description: "An application for finding nearby dog-friendly restaurants, and relevant information about them.",
  deployed: "https://ryangautier1.github.io/Lunch-and-Wag/",
  repo: "https://github.com/ryangautier1/Lunch-and-Wag",
  },
  {
  key: 2,
  title: "W4",
  image: w4,
  alt: "W4 Logo",
  description: "W4 (Watch What Where When) is a movie and tv streaming locator and watchlist storing service.",
  deployed: "https://wfourbkf.herokuapp.com/",
  repo: "https://github.com/ryangautier1/Tv-Tracker",
  }
]

function ProjectContent() {
  return (
    <div className="relative flex flex-wrap about-content items-center justify-center project-page">
      {projects.map(item => {
        return (
        <ProjectCard {...item} />
        )
      })}
      
    </div>
  )
}

export default ProjectContent;