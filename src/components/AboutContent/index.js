import React from "react";
import "./style.css";
import pic from "../../images/ryanpicturesquare.png"

function AboutContent() {
  return (
    <div className="relative flex flex-col about-content items-center sm:justify-center sm:mt-0 mt-12 about-page">
      <div>
        <img src={pic} alt="Ryan Gautier" className="rounded-full picture-me mb-5" />
      </div>
      <div className="text-gray-100 text-md sm:text-lg text-center about-text">
        I am a web developer based in Austin, TX.
        My passion is problem solving, which is why I love what I do.
        <br /><br />
        My skillset includes
        <span className="skills text-lg sm:text-xl"> HTML, CSS, CSS Frameworks, JavaScript, jQuery, Node, Express, MySQL, 
        MongoDB, and React.</span>
        <br /><br />
        I enjoy using my creativity to create beautiful, simple solutions to complex problems. I 
        graduated from Texas A&M University with a B.S. in Mechanical Engineering, and am a recent 
        graduate from the University of Texas at Austin Full Stack Coding Bootcamp. I am excited to get a 
        running start in my career as a web developer!
      </div>
    </div>
  )
}

export default AboutContent;