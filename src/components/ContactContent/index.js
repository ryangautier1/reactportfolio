import React from "react";
import "./style.css";

function ContactContent() {
  return (
    <div className="relative flex contact-content items-center justify-center">
      <div className="text-gray-100 text-2xl text-center home-text">
        I am currently available for full-time employment. Feel free to reach out!
        <br /><br />
        <span className="text-lg">214-236-9199 | ryangautier2@gmail.com</span>
        <br /><br />
        <a href="https://github.com/ryangautier1" target="_blank" rel="noopener noreferrer" className="text-sm mx-5"><i className="fab fa-github fa-3x"></i></a>
        <a href="https://www.linkedin.com/in/ryangautier1" target="_blank" rel="noopener noreferrer" className="text-sm mx-5" ><i className="fab fa-linkedin fa-3x"></i></a>
      </div>
    </div>
  )
}

export default ContactContent;