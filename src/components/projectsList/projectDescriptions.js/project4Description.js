import React from "react";
import Nav from "../../nav/nav";

import Imagen from "../../../assests/images/8.png";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";
import Welcome from "../../welcome/welcome";

import "./projectDescription.css";
function ProjectDescription4() {
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
          This project presents an example of a Node.js server that uses Express.js
        to handle HTTP requests and provides a RESTful API for CRUD operations
        on a MongoDB database. The article explains the various components of
        the application, including middleware for processing JSON and form data,
        API routes associated with controllers, controllers handling HTTP
        requests, services interacting with the database, and the database
        connection itself. The provided code showcases how to use Node.js,
        Express.js, and MongoDB to create a backend application that can handle
        CRUD operations on a database
          <div className="projectDescriptionLinks">
           {/* <Link
              className="projectDescriptionLink"
              to="https://react-project-kiruna-trip.netlify.app/"
            >
              <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> Postman Code
            </Link>*/}
            <Link
              className="projectDescriptionLink"
              to="https://github.com/DiegoDimitroffPetcoff/CRUDforStudents"
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

export default ProjectDescription4;
