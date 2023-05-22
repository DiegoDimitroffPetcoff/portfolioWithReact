import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./header.css";
import Welcome from ".././welcome/welcome";
import MyExperience from "../welcome/myExperience";
import MyLenguajesSkills from "../welcome/myLenguajesSkills";
import BlogsList from "../welcome/blogsList";

import Nav from "../nav/nav.js";
import Profile from "../welcome/profile";

export function Header({ scrollToBlogArticle5 }) {
  return (
    <div>
      <Nav></Nav>
      <Welcome ></Welcome>
      <Profile></Profile>
      <MyExperience></MyExperience>
      <MyLenguajesSkills></MyLenguajesSkills>
      <BlogsList scrollToBlogArticle5={scrollToBlogArticle5}></BlogsList>
    </div>
  );
}

export default Header;
