import React from "react";

import "./profile.css";
import "./myExperience.css"

import Imagen from "../../assests/images/3.png";

import "./welcome.css";
function MyExperience() {
  return (
    <div className="profileContent">
      <img
        className="imagenMyExperience"
        src={Imagen}
        alt="Diego Dimitroff Petocff Experience"
      />
      <div className="textProfileContentRigth">
        <h1 > MY EXPERIENCE</h1>
        <ul>
          <li>
            BACKEND PROGRAMER | Internship NO COUNTRY - Team selected | July -
          </li>
          <li>
            Current. TEAM LIDER | Internship NO COUNTRY | Sep 2022 - Oct 2022·
          </li>
          -CERTIFICATE-{" "}
          <li>
            Data analyst at Google analytics | Internship AUMLA |July 2021 -
            September 2021·
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyExperience;
