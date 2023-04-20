import React from "react";

import "./profile.css";
import "./myExperience.css";
import "./welcome.css";

import Imagen from "../../assests/images/4.png";
import Welcome from "./welcome";
import Nav from "../nav/nav";

function MyStudies() {
  return (
    <div>
      <Nav></Nav>
      <Welcome></Welcome>
      <div className="profileContent">
        <img
          className="imagenMyExperience"
          src={Imagen}
          alt="Diego Dimitroff Petocff Studies"
        />
        <div>
          <h1> MY STUDIES</h1>
          <ul>
            <li>
              Informatorio Gobierndo de la provincia del Chaco - Argentina |
              Introduction to programming. March 2022 - April 2022 - CERTIFICATE
              -
            </li>

            <li>
              CODERHOUSE | Backend Programming |March 2022 - September 2022.
              -CERTIFICATE-
            </li>
            <li>
              OPEN BOOTCAMP | Basic Concepts of Programming |February 2023.
              -CERTIFICATE-
            </li>
            <li> - CERTIFICATIONS AND MORE STUDIES CARRIED OUT -</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyStudies;
