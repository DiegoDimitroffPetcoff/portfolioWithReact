import React from "react";
import Nav from "../../nav/nav";

import Imagen from "../../../assests/images/2.png";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";

import "./projectDescription.css";
function ProjectDescription1() {
  return (
    <div>
   <Nav></Nav>
      <div className="projectDescriptionContainer">
        <h2 className="projectDescriptionTitle">Ecommerce Project</h2>
        <img
          className="imagenProjectDescription"
          src={Imagen}
          alt="Ecommerce Project"
        />

        <span className="projectDescriptionText">
          <div>INTRODUCCION</div>
          Work done throughout the Backend bootcamp. It is a simple application
          with E commerce format, where you can add elements such as text and a
          price.. The user who enters can create his account by placing his
          personal information and his email, when this happens the
          administrator will receive an email with that information Added
          products can be edited as well as deleted. Objects can be searched
          according to ID in the filter found on the main page or in the
          "filters" tab. On the other hand, the application has a MESSAGE
          CENTER, where the person can leave a message. This information, unlike
          what happens with saved products, is stored in a folder. The intention
          is to be able to use various ways of saving in the project (mongoose
          and filesystem). All the information is updated through the socket io
          packet in real time, which I understand makes it more dynamic. The
          application compresses the information from the message center for
          greater speed and it is deployed using all the cores of the processor
          that is acting (cluster). It can start running through different
          commands so that different databases can be used and it is adapted by
          building a factory that allows it to be scalable to be able to use
          various types of data voids. TECHNOLOGY USED The project has a base
          written with javascript, with MVP mode (Model view controller). NODE
          JS is used. and ExpressJs. For the front template engines are used, in
          this case HBS was used. For the practice of the message center,
          Websockets were used. In regards to the DBS. Mongo DB is used, with
          the moongose ​​package that makes it compatible with node js.
          Throughout the project different types of logs were used and the
          project is deployed on Heroku. The emails that were used were made
          through nodemailer..
          <div className="projectDescriptionLinks">
            <Link className="projectDescriptionLink" to="/">
              <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOY CODE
            </Link>
            <Link
              className="projectDescriptionLink"
              to="https://github.com/DiegoDimitroffPetcoff/EcommerceProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub></AiFillGithub> GIT HUB CODE
            </Link>
          </div>
        </span>

        <Link className="cardLink" to="/">
          BACK HOME
        </Link>
      </div>
    </div>
  );
}

export default ProjectDescription1;
