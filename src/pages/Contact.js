import React, { useEffect } from 'react';
import HomeContent from '../components/HomeContent';
import "../components/Background/style.css";

function Contact() {
  const loadbackground = () => {
    document.body.removeAttribute("class");
    document.body.classList.add("contact-background");
  }

  useEffect(() => {
    loadbackground();
  }, []);

  return (
    <div>
      <HomeContent />
    </div>
  )
}

export default Contact;