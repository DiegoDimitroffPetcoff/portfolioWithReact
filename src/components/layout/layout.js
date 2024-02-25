import React from "react";
import { Link } from "react-router-dom";

import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import "./welcome.css";

function Layout() {
  return (
    <div id="welcome">
      <h3 data-aos="flip-down">Welcome to my portfolio!</h3>
      <h1 data-aos="flip-down">DIEGO DIMITROFF PETCOFF</h1>
      <a
        data-aos="zoom-in"
        href="./CV.pdf"
        target="_blank"
        download="CV-DiegoDimitroffPetcoff"
      >
        CV
      </a>
    </div>
  );
}

export default Layout;
