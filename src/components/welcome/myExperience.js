import React from "react";

import "./profile.css";
import "./myExperience.css";

import Imagen from "../../assests/images/3.png";

import "./welcome.css";
import { Link } from "react-router-dom";
function MyExperience() {
  return (
    <div className="profileContent">
      <img
        className="imagenMyExperience"
        src={Imagen}
        alt="Diego Dimitroff Petocff Experience"
      />
      <div className="textProfileContentRigth">
        <h1> My Experience</h1>
        <ul>
          <li>
            BACKEND PROGRAMER | Internship NO COUNTRY - Team selected | July
            2022 - Mar 2023
            <Link to="https://diegodimitroffpetcoff.github.io/Porfolio/images/Certificate-NoCountry-DiegoDimitroffPetcoff.jpg">
              {" "}
              - CERTIFICATE -{" "}
            </Link>
            <Link to="https://www.nocountry.tech/"> - Company Website - </Link>
          </li>
          <li>T.L. | Internship NO COUNTRY | Sep 2022 - Oct 2022·</li>

          <li>
            Data analyst at Google analytics | Internship AUMLA |July 2021 -
            September 2021·
            <Link to="https://www.aumla.se/"> - Company Website - </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyExperience;
