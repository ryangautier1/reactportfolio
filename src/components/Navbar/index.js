import React from "react";
import './style.css';

function Navbar() {
  return (
    <div>
      <div className="logo text-gray-100 border-4 absolute leading-none top-0 left-0 ml-16 mt-12 px-3 pb-2 pt-1 border-gray-100">
        R
      </div>
      <nav className="flex flex-col z-10 relative items-center justify-between text-gray-100">
        <div className="mx-3 block text-2xl nav-item">Home</div>
        <div className="mx-3 block text-2xl nav-item">About</div>
        <div className="mx-3 block text-2xl nav-item">Projects</div>
        <div className="mx-3 block text-2xl nav-item">Contact</div>
      </nav>
    </div>
  );
}

export default Navbar;