import React from "react";
import './style.css';

function Navbar() {
  return (
    <nav className="w-full py-4 relative right-0 z-10">
      <div className="inline-block mx-3 text-2xl nav-item">Home</div>
      <div className="inline-block mx-3 text-2xl nav-item">About</div>
      <div className="inline-block mx-3 text-2xl nav-item">Projects</div>
      <div className="inline-block mx-3 text-2xl nav-item">Contact</div>
    </nav>
  );
}

export default Navbar;