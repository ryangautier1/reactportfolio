import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <div>
      <div className="cursor-pointer z-20 logo text-gray-100 border-4 absolute leading-none top-0 left-0 ml-16 mt-12 px-3 pb-2 pt-1 border-gray-100">
        <Link to="/">
          R
        </Link>
      </div>
      <nav className="flex flex-col z-10 absolute items-center justify-between text-gray-100">
        <div className="mx-3 cursor-pointer block text-2xl nav-item"><Link to="/">Home</Link></div>
        <div className="mx-3 cursor-pointer block text-2xl nav-item"><Link to="/about">About</Link></div>
        <div className="mx-3 cursor-pointer block text-2xl nav-item"><Link to="/projects">Projects</Link></div>
        <div className="mx-3 cursor-pointer block text-2xl nav-item">Contact</div>
      </nav>
    </div>
  );
}

export default Navbar;