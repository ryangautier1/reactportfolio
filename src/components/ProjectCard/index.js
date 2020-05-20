import React from "react";
import "./style.css";
import dog from "../../images/dog.png"

function ProjectCard() {
  return (
    <div className="relative flex flex-col about-content items-center justify-center project-page">
      <div className="project-card">
        <a href="https://ryangautier1.github.io/Lunch-and-Wag/" target="_blank" rel="noopener noreferrer">
          <div className="w-full px-3 pb-3 bg-gray-300 rounded-lg">
            <img src={dog} alt="Lunch and Wag Logo" />
            {/* <a href="https://github.com/ryangautier1/Lunch-and-Wag" target="_blank"><img
          src="assets/github-image.png" class="card-github" alt="Github Logo" /></a> */}
            <div>
              <h5 class="text-xl pb-2">Lunch and Wag</h5>
              <p class="text-md">An application for finding nearby dog-friendly restaurants, and relevant
            information about them.</p>
            </div>
          </div>
        </a>
        <a href="https://github.com/ryangautier1/Lunch-and-Wag" target="_blank" rel="noopener noreferrer">
          <div className="text-center bg-gray-200 rounded-lg mt-2 py-1">
            Github Repo
        </div>
        </a>
      </div>
    </div >
  )
}

export default ProjectCard;