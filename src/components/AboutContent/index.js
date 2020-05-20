import React from "react";
import "./style.css";
import pic from "../../images/ryanpicturesquare.png"

function AboutContent() {
  return (
    <div className="relative flex flex-col about-content items-center justify-center">
      <div>
        <img src={pic} alt="Ryan Gautier" className="rounded-full picture-me" />
      </div>
      <div className="text-gray-100 text-5xl text-center about-text">
        About meeeeeeee
      </div>
    </div>
  )
}

export default AboutContent;