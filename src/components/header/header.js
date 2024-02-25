import React from "react";

import "./header.css";
import Welcome from ".././welcome/welcome";
import MyExperience from "../welcome/myExperience";
import MyLenguajesSkills from "../welcome/myLenguajesSkills";
import BlogsList from "../welcome/blogsList";

import NavBarComponent from "../nav/nav.js";
import Profile from "../welcome/profile";


export function Header() {
  return (
    <div >
      <NavBarComponent />
      {/*       <Welcome  ></Welcome>
      <Profile ></Profile>
      <MyExperience ></MyExperience>
      <MyLenguajesSkills ></MyLenguajesSkills>
      <BlogsList ></BlogsList> */}
    </div>
  );
}

export default Header;
