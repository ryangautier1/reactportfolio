import React, { useEffect } from 'react';
import ProjectContent from '../components/ProjectContent';
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
      <ProjectContent />
    </div>
  )
}

export default Projects;