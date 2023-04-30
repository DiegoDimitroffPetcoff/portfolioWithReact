import React from "react";
import Nav from "../../nav/nav";

import Imagen from "../../../assests/images/5.png";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";
import Welcome from "../../welcome/welcome";

import "./projectDescription.css";
function ProjectDescription3() {
  return (
    <div>
      <Nav></Nav>
      <Welcome></Welcome>
      <div className="projectDescriptionContainer">
        <h2 className="projectDescriptionTitle">E-COMMERCE PROJECT</h2>
        <img
          className="imagenProjectDescription"
          src={Imagen}
          alt="My First React Project"
        />

        <span className="projectDescriptionText">
          <div>INTRODUCCION</div>
         This project was the result of teamwork between four
          junior programmers. It was divided into two, El Frontent and the
          Backend. I worked in the backend area. The working time was 5 weeks
          and the development of the API was coordinated. with a team leader.
          TECHNOLOGY USED From the FRONTEND point of view, REACT JS was used.
          and the BACKEND NodeJs with express js. The database used was Mongo Db
          and the architecture of the back was made based on ROUTES CONTROLLERS
          and CONTAINERS.
          <div className="projectDescriptionLinks">
           {/* <Link
              className="projectDescriptionLink"
              to="https://react-project-kiruna-trip.netlify.app/"
            >
              <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> Postman Code
            </Link>*/}
            <Link
              className="projectDescriptionLink"
              to="https://github.com/DiegoDimitroffPetcoff/GYM-administration-APP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub></AiFillGithub> GIT HUB CODE
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

export default ProjectDescription3;
