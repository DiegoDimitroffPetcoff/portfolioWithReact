import React from "react";
import Nav from "../../nav/nav";

import Imagen from "../../../assests/images/11.png";
import { Link } from "react-router-dom";
import {

  AiOutlineFile
} from "react-icons/ai";
import Layout from "../../layout/layout";


import "./projectDescription.css";
function ProjectDescription6() {
  return (
    <div>
      <Nav></Nav>
      <Layout></Layout>
      <div className="projectDescriptionContainer">
        <h2 className="projectDescriptionTitle">Zuca Arq Project</h2>
        <img
          className="imagenProjectDescription"
          src={Imagen}
          alt="School API"
        />

        <span className="projectDescriptionText">
          <div>INTRODUCCION</div>
          This project is designed to be scalable and compatible with various
          types of databases, with MongoDB being the initial choice. The primary
          objective of this project is to provide administrative users with the
          ability to configure various functionalities. For example, they can
          showcase different projects through images and offer courses where
          users with "alumn" status can access videos and complete the entire
          course to acquire knowledge about nail painting techniques.
          <div>The architecture</div>
          The architecture of this project follows a modular and scalable
          approach. It is designed to separate concerns and promote code
          reusability. Here's an overview of the architectural components:
          <div>MODEL:</div> The model represents the data structure of the
          application. It defines the schema and interacts with the database. In
          this project, MongoDB is used as the database, and Mongoose is
          utilized as an Object Data Modeling (ODM) library to define and work
          with the data models. Controller: The controller handles the logic and
          business operations of the application. It receives requests from the
          routes and interacts with the necessary services to process the data.
          It is responsible for handling input validation, calling the
          appropriate services, and returning the response to the client.
          <div>SERVICES:</div> The service layer contains the core business
          logic of the application. It encapsulates reusable functions and
          performs complex operations. Services interact with the models and
          other external services as needed. They handle tasks such as data
          manipulation, data retrieval, and external API integration.
          <div>ROUTES:</div> The routes define the endpoints and HTTP methods
          that the application exposes. They receive incoming requests, validate
          input, and route the requests to the corresponding controller methods.
          Each route is responsible for a specific resource or functionality in
          the application. Server: The server file is responsible for setting up
          the Express application, configuring middleware, and connecting to the
          database. It initializes the necessary components, such as routes and
          database connections, and starts the server to listen for incoming
          requests. By separating concerns into distinct components, this
          architecture promotes code organization, maintainability, and
          scalability. It allows for easy addition of new features, modification
          of existing functionality, and testing of individual components.
          <div className="projectDescriptionLinks">
            {/*  <Link className="projectDescriptionLink" to="/">
              <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOY CODE
            </Link>*/}
            <Link
              className="projectDescriptionLink"
              to="https://www.linkedin.com/pulse/my-web-development-project-platform-architectural-diego-leonardo%3FtrackingId=cy46zjxnVqwEezUumsKDcg%253D%253D/?trackingId=cy46zjxnVqwEezUumsKDcg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFile></AiOutlineFile> Article that I wrote about this project
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
