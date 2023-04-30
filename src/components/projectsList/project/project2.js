import React from "react";
import Imagen from "../../../assests/images/7.png";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";

function Article2() {
  return (
    <div className="card">
      <img className="imagenArticle" src={Imagen} alt="Ecommerce Project" />
      <h2 className="cardTitle">My first React Project</h2>
      <span className="cardText">
        {" "}
        This is my first (and only, at the moment) project made in React. I am
        currently learning a little about this technology. This site is under
        construction, but I think you will enjoy its images!.
      </span>
      <div className="cardContentLink">
        <Link className="cardLink" to="/ProjectDescription2">
          <AiOutlineArrowRight></AiOutlineArrowRight> A litle more about this
          project?
        </Link>
        <Link className="cardLink" to="https://github.com/DiegoDimitroffPetcoff/reactProject" target="_blank" rel="noopener noreferrer">
          <AiFillGithub></AiFillGithub> GIT HUB CODE
        </Link>
        <Link className="cardLink" to="https://react-project-kiruna-trip.netlify.app/" target="_blank" rel="noopener noreferrer">
          <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOY CODE
        </Link>
      </div>
    </div>
  );
}

export default Article2;
