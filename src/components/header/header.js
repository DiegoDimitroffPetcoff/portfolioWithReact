import React from "react";

import "./header.css";

import MyExperience from "../layout/myExperience.js";
import MyLenguajesSkills from "../layout/myLenguajesSkills.js";
import BlogsList from "../layout/blogsList.js";

import NavBarComponent from "../nav/nav.js";
import Profile from "../layout/profile.js";
import Layout from "../layout/layout.js";

export function Header() {
  return (
    <>
      <NavBarComponent />
    {/*   <Layout/> */}
      <Profile></Profile>
      {/*       <MyExperience></MyExperience>
      <MyLenguajesSkills></MyLenguajesSkills>
      <BlogsList></BlogsList> */}
    </>
  );
}

export default Header;
