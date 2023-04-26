import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import {  Link } from "react-router-dom";
import "../welcome/welcome.css";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("si");
    document.getElementById("headerMenu").classList.toggle("show");
  };

  return (
    <div id="headerMenu">
      <button onClick={toggleMenu}>
        <span className="menuLetters">MENU</span> <span className="navBurguerIcon"><AiOutlineMenu></AiOutlineMenu></span>
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/aboutme">About Me</Link>
          </li>
          <li>
          <Link to="/aboutMyStudies">My Studies</Link>
          </li>
          <li>
            <Link to="/articlesList">Some Articles</Link>
          </li>
          <li>
            <Link to="/projectlist">Projects</Link>
          </li>
          
        </ul>
      </nav>
  
    </div>
  );
}

export default Nav;
