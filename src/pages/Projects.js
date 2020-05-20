import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import "../components/Background/style.css";

function Projects() {
  const loadbackground = () => {
    document.body.removeAttribute("class");
    document.body.classList.add("project-background");
  }

  useEffect(() => {
    loadbackground();
  }, [])

  return (
    <div>
      <ProjectCard />
    </div>
  )
}

export default Projects;