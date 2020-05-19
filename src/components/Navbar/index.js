import React from "react";
import './style.css';

function Navbar() {
  return (
    <nav className="flex flex-col z-10 relative items-center justify-between text-gray-100">
      <div className="mx-3 block text-2xl nav-item">Home</div>
      <div className="mx-3 block text-2xl nav-item">About</div>
      <div className="mx-3 block text-2xl nav-item">Projects</div>
      <div className="mx-3 block text-2xl nav-item">Contact</div>
    </nav>
  );
}

export default Navbar;