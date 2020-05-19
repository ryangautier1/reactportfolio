import React, { useEffect } from 'react';
import HomeContent from '../components/HomeContent';
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
      <HomeContent />
    </div>
  )
}

export default Projects;