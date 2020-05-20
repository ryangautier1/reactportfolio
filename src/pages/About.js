import React, { useEffect } from "react";
import AboutContent from '../components/AboutContent';
import "../components/Background/style.css";

function About() {
  const loadbackground = () => {
    document.body.removeAttribute("class");
    document.body.classList.add("about-background");
  }

  useEffect(() => {
    loadbackground();
  }, []);

  return (
    <div>
      <AboutContent />
    </div>
  )
}

export default About;
