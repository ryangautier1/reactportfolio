import React, { useEffect } from 'react';
import ContactContent from '../components/ContactContent';
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
      <ContactContent />
    </div>
  )
}

export default Contact;