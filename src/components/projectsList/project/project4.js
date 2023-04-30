import React from "react";
import Imagen from "../../../assests/images/8.png";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";

function Article4() {
  return (
    <div className="card">
      <img className="imagenArticle" src={Imagen} alt="Ecommerce Project" />
      <h2 className="cardTitle">Title</h2>
      <span className="cardText">
        {" "}
        The project demonstrates how to use Express.js and Node.js to create a
        RESTful API for performing CRUD operations on a MongoDB database. The
        article explains the various components of the application, including
        middleware for processing JSON and form data, API routes associated with
        controllers, controllers handling HTTP requests, services interacting
        with the database, and the database connection itself. The code provided
        in the project serves as a practical example for creating a backend
        application using Node.js, Express.js, and MongoDB..
      </span>
      <div className="cardContentLink">
        <Link className="cardLink" to="/projectDescription4">
          <AiOutlineArrowRight></AiOutlineArrowRight> A litle more about this
          project?
        </Link>
        <Link className="cardLink" to="https://github.com/DiegoDimitroffPetcoff/CRUDforStudents">
          <AiFillGithub></AiFillGithub> GIT HUB CODE
        </Link>
      {/*}  <Link className="cardLink" to="/">
          <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOY CODE
        </Link>*/}
      </div>
    </div>
  );
}

export default Article4;
