import React from "react";
import Nav from "../../nav/nav";

import Imagen from "../../../assests/images/13.png";
import { Link } from "react-router-dom";
import {
  AiOutlineDeploymentUnit,
  AiOutlineFile
} from "react-icons/ai";
import Welcome from "../../welcome/welcome";

import "./projectDescription.css";
function ProjectDescription6() {
  return (
    <div>
      <Nav></Nav>
      <Welcome></Welcome>
      <div className="projectDescriptionContainer">
        <h2 className="projectDescriptionTitle">Nails Project</h2>
        <img
          className="imagenProjectDescription"
          src={Imagen}
          alt="School API"
        />

        <span className="projectDescriptionText">
          <div>INTRODUCCION</div>
          This is a project completely designed by me. Selection of compatible colors and CSS construction.
This project is aimed at a client who wants to offer courses for teaching nail painting. In addition to this, you can show the work you do with images that are stored in a different database.
In this sequence, users will be able to log in and then be able to participate in the classes. Each User will have a "student" role and only the administrator will be able to change that status, since only whoever has the administrator role will be able to make substantial changes to the entire web.
From this visual I manage the Token that I receive from the Back that I have also created. It will be kept saved as a Cookie in order to obtain greater security. As well as sending email and password to the back to log in (which is correctly encrypted)
          <div>The architecture</div>
          Regarding the architecture, I have made the difference between reusable components and containers that will show the corresponding information. Also make a folder with the routes and these will use both the containers and the components.
          <div className="projectDescriptionLinks">
              <Link className="projectDescriptionLink" target="_blank" to="https://schoolproject-nine.vercel.app/">
              <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOY CODE
            </Link>
            <Link
              className="projectDescriptionLink"
              to="https://www.linkedin.com/posts/diegodimitroffpetcoff_hi-there-as-i-said-a-few-days-ago-activity-7079911327955136512-kZbF?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFile></AiOutlineFile> About the backend of this project
            </Link>
 
          </div>
        </span>

        <Link className="cardLink" to="/projectlist">
          BACK
        </Link>
      </div>
    </div>
  );
}

export default ProjectDescription6;
