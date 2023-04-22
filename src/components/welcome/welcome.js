import React from "react";
import { Link } from "react-router-dom";

import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import "./welcome.css";

function Welcome() {
  return (
    <div id="welcome">
      <h3>Welcome to my portfolio!</h3>
      <h1>DIEGO DIMITROFF PETCOFF</h1>
      <a href="./CV.pdf" target="_blank" download="CV-DiegoDimitroffPetcoff">
        Check my CV
      </a>

      <div id="iconsWelcome">
        <Link
          to="https://github.com/DiegoDimitroffPetcoff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub></AiFillGithub>
        </Link>
        <Link
          to="https://www.linkedin.com/in/diegodimitroffpetcoff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin></AiOutlineLinkedin>
        </Link>

        <a href="tel:+351935828293">
          <AiFillPhone></AiFillPhone>
        </a>

        <a
          href="mailto:diegodimitroffpetcoff@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail></AiOutlineMail>
        </a>
      </div>
    </div>
  );
}

export default Welcome;
