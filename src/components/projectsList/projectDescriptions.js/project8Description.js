import React from "react";
import Nav from "../../nav/nav";

import Imagen from "../../../assests/images/14.png";
import { Link } from "react-router-dom";
import {
  AiOutlineDeploymentUnit,
  AiOutlineFile
} from "react-icons/ai";
import Welcome from "../../welcome/welcome";

import "./projectDescription.css";
function ProjectDescription8() {
  return (
    <div>
      <Nav></Nav>
      <Welcome></Welcome>
      <div className="projectDescriptionContainer">
        <h2 className="projectDescriptionTitle">CHAT APP -"Tell Me"</h2>
        <img
          className="imagenProjectDescription"
          src={Imagen}
          alt="School API"
        />

        <span className="projectDescriptionText">
          <div>INTRODUCCION</div>
          Project developed with the No Country team where I worked as a Full Stack. In it you can see the tools used from the Frontend point of view with React and Next Js. And from the Node Js Backend with Express Js
          Among the actions that are observed, the user can register and log in, all the information is saved in a SQL database. Chat messages are sent via Socket Io communication.
          <div className="projectDescriptionLinks">
              <Link className="projectDescriptionLink" target="_blank" to="https://c13-13-n-node-react-n72y.vercel.app/">
              <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOY CODE
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

export default ProjectDescription8;
