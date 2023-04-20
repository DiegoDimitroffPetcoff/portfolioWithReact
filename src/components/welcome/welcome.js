import React from "react";
import { Link } from "react-router-dom";

import {  AiFillGithub, AiOutlineLinkedin, AiOutlineMail,  AiFillPhone  } from "react-icons/ai";
import "./welcome.css"
function Welcome() {
  return (
    <div id="welcome">
    <h3>Welcome to my portfolio!</h3>
      <h1>DIEGO DIMITROFF PETCOFF</h1>
      <Link to="/projectlist">Check my CV</Link>
      <div id="iconsWelcome">
      <Link to="https://www.linkedin.com/feed/"><AiFillGithub></AiFillGithub></Link>
      <Link to="/projectlist"><AiOutlineLinkedin></AiOutlineLinkedin></Link>
      <Link to="/projectlist"><AiOutlineMail></AiOutlineMail></Link>
      <Link to="/projectlist">< AiFillPhone ></AiFillPhone></Link>  
      </div>
    </div>
  );
}

export default Welcome;
