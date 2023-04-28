import React from "react";
import { Link } from "react-router-dom";

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
              <div>
                {" "}
                OPEN BOOTCAMP | Certification - Basic level certification of
                JavaScript programming language |March 2023.
              </div>
              <Link
                to="https://community.open-bootcamp.com/user/diegodimii/certificaciones/4e622e1b-d848-4437-a3c0-9bd8e8c0e78b"
                className="linksMyExperience"
                target="_blank"
                rel="noopener noreferrer"
              >
                CERTIFICATE
              </Link>
            </li>

            <li>
              <div>
                {" "}
                OPEN BOOTCAMP | Basic Concepts of Programming |February 2023.
              </div>
              <Link
                to="https://community.open-bootcamp.com/user/diegodimii/certificaciones/06a55635-aed5-4be3-9bb8-f8d10bd08cc3"
                className="linksMyExperience"
                target="_blank"
                rel="noopener noreferrer"
              >
                CERTIFICATE
              </Link>
            </li>

            <li>
              <div>
                {" "}
                CODERHOUSE | Backend Programming |March 2022 - September 2022.
              </div>
              <Link
                to="https://coderhouse.es/certificados/633a35ac4e4cb8000e82e2b4?country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es&country=es"
                className="linksMyExperience"
                target="_blank"
                rel="noopener noreferrer"
              >
                CERTIFICATE
              </Link>
            </li>

            <li>
              <div>
                Informatorio Gobierndo de la provincia del Chaco - Argentina |
                Introduction to programming. March 2022 - April 2022{" "}
              </div>
              <Link
                to="https://diegodimitroffpetcoff.github.io/Porfolio/images/certificado%20chaco.pdf"
                className="linksMyExperience"
                target="_blank"
                rel="noopener noreferrer"
              >
                CERTIFICATE
              </Link>
            </li>

            <li>
              <Link
                to="https://diegodimitroffpetcoff.github.io/Porfolio/images/CERTIFICATES.pdf"
                className="linkMyExperienceMore"
                target="_blank"
                rel="noopener noreferrer"
              >
                CERTIFICATIONS AND MORE STUDIES CARRIED OUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyStudies;
