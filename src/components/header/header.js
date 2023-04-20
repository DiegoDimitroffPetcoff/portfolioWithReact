import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./header.css";
import Welcome from ".././welcome/welcome";

import Nav from "../nav/nav.js";
import Profile from "../welcome/profile";

export function Header() {
  return (
    <div>
      <Nav></Nav>
      <Welcome></Welcome>
      <Profile></Profile>
    </div>
  );
}

export default Header;
