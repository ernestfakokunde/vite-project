import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaFacebook, FaTiktok, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {

  const socialLinks = {
    github: "https://github.com/ernestfakokunde",
    linkedin: "https://www.linkedin.com/in/ernest-fakokunde-53713a36a",
    tiktok: "https://www.tiktok.com/@codewithayo",
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <ul className="nav-list">
          <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
        </ul>
        <div className="nav-cta">
          <a className="btn" href="mailto:ernestfakokunde9@gmail.com">Hire Me</a>
           <div className="flex space-x-4 text-2xl text-white mt-2">
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-blue-400 transition" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="hover:text-blue-500 transition" />
      </a>
      <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
        <FaTiktok className="hover:text-pink-500 transition" />
      </a>
      <a href="https://www.linkedin.com/in/ernest-fakokunde-53713a36a" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-600 transition" />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="hover:text-gray-400 transition" />
      </a>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
