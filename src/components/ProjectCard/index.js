import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
      <div className="project-card mx-8">
        <a href={props.deployed} target="_blank" rel="noopener noreferrer">
          <div className="w-full px-3 pb-3 bg-gray-300 rounded-lg">
            <img src={props.image} alt={props.alt} />
            <div>
              <h5 className="text-xl pb-2">{props.title}</h5>
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