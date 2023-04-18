import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./header.css";
import Welcome from ".././welcome/welcome";
import {  AiOutlineMenu  } from "react-icons/ai";
import { useState } from 'react';



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("si")
    document.getElementById("headerMenu").classList.toggle("show");

  };

  return (
    <div>
    <div id="headerMenu">
      <button onClick={toggleMenu}>MENU <AiOutlineMenu></AiOutlineMenu></button>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/aboutme">About Me</Link>
          <li>
            <Link to="/articles">Some Articles</Link>
          </li>
          <li>
            <Link to="/projectlist">Projects</Link>
          </li>
        </ul>
      </nav>
  
      <Outlet></Outlet>
      </div>
      <Welcome></Welcome>
    </div>
  );
}


export default Header;
