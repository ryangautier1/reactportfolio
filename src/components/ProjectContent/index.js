import React from "react";
import "./style.css";
import dog from "../../images/dog.png";
import w4 from "../../images/w4logo.png";
import orca from "../../images/orca.png";
import weather from "../../images/weather.png";
import googlebook from "../../images/googlebook.png";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    key: 1,
    title: "Lunch and Wag",
    image: dog,
    alt: "Lunch and Wag Logo",
    description: "An application for finding nearby dog-friendly restaurants, and relevant information about them.",
    deployed: "https://ryangautier1.github.io/Lunch-and-Wag/",
    repo: "https://github.com/ryangautier1/Lunch-and-Wag"
  },
  {
    key: 2,
    title: "W4",
    image: w4,
    alt: "W4 Logo",
    description: "W4 (Watch What Where When) is a movie and tv streaming locator and watchlist storing service.",
    deployed: "https://wfourbkf.herokuapp.com/",
    repo: "https://github.com/ryangautier1/Tv-Tracker"
  },
  {
    key: 3,
    title: "React Google Book Search",
    image: googlebook,
    alt: "Google book search screenshot",
    description: "An application for searching and storing books. Built with React, MongoDB, Express, deployed through Heroku. ",
    deployed: "https://protected-badlands-39273.herokuapp.com/",
    repo: "https://github.com/ryangautier1/GoogleBookSearch"
  },
  {
    key: 4,
    title: "Avoid the Orcas",
    image: orca,
    alt: "Avoid the Orcas Logo",
    description: "A recreation of classic Minesweeper using JavaScript.",
    deployed: "https://ryangautier1.github.io/AvoidTheOrcas/",
    repo: "https://github.com/ryangautier1/AvoidTheOrcas"
  },
  {
    key: 5,
    title: "Read Me Generator",
    image: "https://github.com/ryangautier1/Readme-Generator/raw/master/ImplementationGif.gif",
    alt: "Read Me Gnereator GIF",
    description: "A CLI application for generating README's.",
    deployed: "https://github.com/ryangautier1/Readme-Generator",
    repo: "https://github.com/ryangautier1/Readme-Generator"
  },
  {
    key: 6,
    title: "Weather Dashboard",
    image: weather,
    alt: "Weather Dahsboard Screenshot",
    description: "Easily find current weather conditions and forecasts for your city of choice.",
    deployed: "https://ryangautier1.github.io/06-Weather-Dashboard/",
    repo: "https://github.com/ryangautier1/06-Weather-Dashboard"
  }

]

function ProjectContent() {
  return (

    <div className="flex project-page items-center">
      <div className="relative flex flex-row overflow-x-auto project-slider mx-4">
        {projects.map(item => {
          return (
            <ProjectCard {...item} />
          )
        })}
      </div>

    </div>
  )
}

export default ProjectContent;