import React from "react";
import { Outlet, Link } from "react-router-dom";

import {  AiFillGithub, AiOutlineLinkedin, AiOutlineMail,  AiOutlineMergeCells } from "react-icons/ai";
import "./welcome.css"
function Welcome() {
  return (
    <div id="welcome">
    <h3>Welcome to my portfolio!</h3>
      <h1>DIEGO DIMITROFF PETCOFF</h1>
      <Link to="/projectlist">Check my CV</Link>
      <div id="iconsWelcome">
      <Link to="/projectlist"><AiFillGithub></AiFillGithub></Link>
      <Link to="/projectlist"><AiOutlineLinkedin></AiOutlineLinkedin></Link>
      <Link to="/projectlist"><AiOutlineMail></AiOutlineMail></Link>
      <Link to="/projectlist">< AiOutlineMergeCells></ AiOutlineMergeCells></Link>
      </div>
    </div>
  );
}

export default Welcome;
