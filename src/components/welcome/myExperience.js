import React, { useEffect } from "react";

import "./profile.css";
import "./myExperience.css";

import Imagen from "../../assests/images/3.png";

import "./welcome.css";
import { Link } from "react-router-dom";

function MyExperience() {

  return (
    <div className="profileContent">
      <img
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="imagenMyExperience"
        src={Imagen}
        alt="Diego Dimitroff Petocff Experience"
      />
      <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="textProfileContentRigth">
        <h1> My Experience</h1>
        <ul>
          <li> <div>
            BACKEND PROGRAMER | Internship NO COUNTRY - Team selected | July
            2022 - Mar 2023</div>
            <Link
              to="https://diegodimitroffpetcoff.github.io/Porfolio/images/Certificate-NoCountry-DiegoDimitroffPetcoff.jpg"
              className="linksMyExperience"
              target="_blank"
              rel="noopener noreferrer"
            >

              CERTIFICATE
            </Link>
            <Link
              to="https://www.nocountry.tech/"
              className="linksMyExperience"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Company Website {" "}
            </Link>
          </li>
          <li>T.L. | Internship NO COUNTRY | Sep 2022 - Oct 2022·</li>

          <li><div>
            Data analyst at Google analytics | Internship AUMLA |July 2021 -
            September 2021·</div>
            <Link
              to="https://www.aumla.se/"
              className="linksMyExperience"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Company Website {" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyExperience;
