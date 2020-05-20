import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
      <div className="project-card flex-none mx-12 mb-4">
        <a href={props.deployed} target="_blank" rel="noopener noreferrer">
          <div className="w-full p-3 bg-gray-300 rounded-lg">
            <img src={props.image} alt={props.alt} />
            <div>
              <h5 className="text-xl py-2">{props.title}</h5>
              <p className="text-md">{props.description}</p>
            </div>
          </div>
        </a>
        <a href={props.repo} target="_blank" rel="noopener noreferrer">
          <div className="text-center bg-gray-200 rounded-lg mt-2 py-1">
            Github Repo
        </div>
        </a>
      </div>
  )
}

export default ProjectCard;