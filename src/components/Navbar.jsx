import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaFacebook, FaTiktok, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const socialLinks = {
    github: "https://github.com/ernestfakokunde",
    linkedin: "https://www.linkedin.com/in/ernest-fakokunde-53713a36a",
    tiktok: "https://www.tiktok.com/@codewithayo",
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="nav-left">
          <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <span className={`hamburger-line ${open ? 'open' : ''}`} />
            <span className={`hamburger-line ${open ? 'open' : ''}`} />
            <span className={`hamburger-line ${open ? 'open' : ''}`} />
          </button>
          <ul className={`nav-list ${open ? 'open' : ''}`}>
            <li><NavLink to="/" end onClick={() => setOpen(false)} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/projects" onClick={() => setOpen(false)} className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink></li>
            <li><NavLink to="/about" onClick={() => setOpen(false)} className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
          </ul>
        </div>

        <div className="nav-cta">
          <a className="btn" href="mailto:ernestfakokunde9@gmail.com">Hire Me</a>
           <div className="flex space-x-4 text-2xl text-white mt-2 social-icons">
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
      {/* mobile overlay menu */}
      <div className={`mobile-menu ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />
    </nav>
  );
};

export default Navbar;
