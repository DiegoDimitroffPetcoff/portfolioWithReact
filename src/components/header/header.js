import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./header.css";
import Welcome from ".././welcome/welcome";
import MyExperience from "../welcome/myExperience";
import MyLenguajesSkills from "../welcome/myLenguajesSkills";

import Nav from "../nav/nav.js";
import Profile from "../welcome/profile";

export function Header() {
  return (
    <div>
      <Nav></Nav>
      <Welcome></Welcome>
      <Profile></Profile>
      <MyExperience></MyExperience>
      <MyLenguajesSkills></MyLenguajesSkills>
    </div>
  );
}

export default Header;
